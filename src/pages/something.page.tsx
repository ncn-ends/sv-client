import Navbar from "@/components/Navbar";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Profile = () => {
    const {
        user, error, isLoading
    } = useUser();

    if ( isLoading ) return <div>Loading...</div>;
    if ( error ) return <div>{ error.message }</div>;
    if ( !user ) return <a href="/api/auth/login">Login</a>;

    return (
        <div>
            <img src={ user.picture } alt={ user.name } />
            <h2>{ user.name }</h2>
            <p>{ user.email }</p>
            <a href="/api/auth/logout">Logout</a>
        </div>
    );
};

const FetchButton = () => {
    const fetchFruits = async() => {
        const res = await fetch( "http://localhost:3000/api/fruits" );

        console.log( await res.json() );
    };

    return (
        <button onClick={ () => fetchFruits() }>Fetch</button>
    );
};

const AuthElement = () => {
    return <div>
        <Profile />
        <FetchButton />
    </div>;
};

const IndexPage = () => {
    return (
        <>
            <Navbar />
            <div className="h-[200vh]">
                <AuthElement />
            </div>
        </>
    );
};

/*
 * export const getServerSideProps: GetServerSideProps = async () => {
 *     // const res = await fetch( "http://localhost:3000/api/fruits" );
 *     try {
 *         return { props: {}, };
 *     }
 *     catch ( err ) {
 *         console.log( err );
 *     }
 * };
 */

export default IndexPage;