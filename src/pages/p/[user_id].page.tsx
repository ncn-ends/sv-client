import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import links from "../../common/static/links.json";
import { GetServerSideProps } from "next";
import Bio from './components/Bio';
import UserBanner from './components/UserBanner';
import HistorySection from './components/HistorySection';
import Divider from '../../common/components/Divider';
import axios from "axios";
import { ProfileData, ProfileDataEditable, UserProfileContext } from "../../common/types/UserProfile";
import populateUserData from "./triggers/populateUserData";
import forwardToLogin from "./triggers/forwardToLogin";
import getEditableOfApiUser from "./utils/getEditableOfApiUser";

export const userProfileContext = React.createContext<UserProfileContext>( null );

// className={ "mx-[clamp(1rem,30vw-5rem,23vw)] p-4 pt-20 pb-50 z-10 relative bg-faded backdrop-blur-[3px]" }

const ProfilePageView = ( { user, isMe } ) => {
    return (
        <div className={ "min-h-[100vh]" }>
            <section
                className="w-full bg-cover min-h-[40vw] absolute z-5 bg-fixed hidden md:block"
                style={ { backgroundImage: `url(${ links.backgrounds.zerg_battle })` } }
            >
                <div className="h-full w-full z-5 absolute fade-down-banner" />
            </section>
            <main
                className={ "body-panel p-4 pt-20 pb-48 z-10 relative bg-faded backdrop-blur-[3px]" }
            >
                <UserBanner user={ user } isMe={ isMe } />
                <Divider />
                <Bio />
                <Divider />
                <HistorySection />
            </main>
        </div>
    )
}

/*
 * tokenUser is the user retrieved from the session token
 * apiUser is the user retrieved from the api using the query parameter id
 */
type ProfilePageHandler = ( { user_id: string } ) => JSX.Element;
const ProfilePageHandler: ProfilePageHandler = ( { user_id } ) => {
    const {
        user: tokenUser,
        error: tokenError,
        isLoading
    } = useUser();
    const router = useRouter();
    const [apiUser, setApiUser] = useState<ProfileData | null>( null );
    const [fetchError, setFetchError] = useState<number>( null );
    const [isEditingProfile, setIsEditingProfile] = useState<boolean>( false );
    const [updatedProfile, setUpdatedProfile] = useState<ProfileDataEditable>( {} as ProfileDataEditable );


    /* 
     * Forwards user to be logged in under conditions.
     */
    useEffect( () => forwardToLogin( {
        user_id,
        tokenUser,
        router,
        isLoading
    } ), [tokenUser, isLoading] );


    /* 
     * Ensures editable profile fields reflect UserProfile data from API.
     */
    useEffect( () => {
        if ( !apiUser ) return;
        setUpdatedProfile( getEditableOfApiUser( { apiUser } ) );
    }, [apiUser] )


    /*
     * Submit user data to be updated under conditions. 
     */
    const isFirstRender = useRef( true );
    useEffect( () => {
        ( async () => {
            if ( isEditingProfile ) return;
            if ( !apiUser ) return;
            const noChangesMade = JSON.stringify( getEditableOfApiUser( { apiUser } ) )
                === JSON.stringify( updatedProfile );
            if ( noChangesMade ) return;
            if ( isFirstRender.current ) return isFirstRender.current = false;

            try {
                const res = await axios.post( "http://localhost:3000/" + "api/user/sync/profile", {
                    ...updatedProfile
                } );
                if ( res.status === 200 ) {
                    setApiUser( res.data );
                }
            } catch ( e ) {
                console.log( e );
            }
        } )()
    }, [isEditingProfile, apiUser] )


    /*
     * Populates user data on render
     */
    useEffect( () => populateUserData( {
        user_id,
        tokenUser,
        isLoading,
        setApiUser,
        setFetchError
    } ), [isLoading, tokenUser] );

    const contextProps = {
        apiUser, isEditingProfile, setIsEditingProfile, updatedProfile, setUpdatedProfile
    }

    if ( isLoading ) return <div>Loading...</div>;
    if ( !isLoading && !tokenUser && user_id === "me" ) return <div>You will be redirected in a moment...</div>;
    if ( tokenError ) return <div>{ tokenError.message }</div>;
    if ( fetchError === 404 ) return <div>User not found.</div>
    if ( fetchError ) return <div>An unknown error occured.</div>
    if ( !apiUser ) return <div>Loading...</div>
    if ( apiUser ) return (
        <userProfileContext.Provider value={ contextProps }>
            <ProfilePageView user={ apiUser } isMe={ user_id === "me" } />
        </userProfileContext.Provider>
    )
    return <div>An unknown error occured and this element is a fallback.</div>;
};

export default ProfilePageHandler;

export const getServerSideProps: GetServerSideProps = async ( context ) => {
    const constructProps = ( user_id ) => {
        return {
            props: {
                user_id
            }
        }
    }

    return constructProps( context.params.user_id );
};


/*
* user enters /p/[id] endpoint
*   if [id] === "me", check token
*       if token is not available, redirect user to login
*       if token is available, display user profile, with options to edit and private info
*   if [id] !== "me", check id
*       send request to database for action method "userlookup"
*           get user profile info, and recent post history
 */