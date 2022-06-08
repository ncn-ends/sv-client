import Image from "next/image";
import links from "@/static/links.json";
import React, { useContext } from "react";
import { formatRelative } from 'date-fns';
import { userProfileContext } from "../[user_id].page";
import EditBtn from './EditButton';
import { ProfileData } from "../../../common/types/UserProfile";
import Editable from "./Editable";

type UserBanner = ( props: { user: ProfileData, isMe: boolean } ) => JSX.Element;
const UserBanner: UserBanner = ( { user, isMe } ) => {
    const { isEditingProfile, setIsEditingProfile } = useContext( userProfileContext );

    const topbar = "flex justify-between w-full";
    const profile_actions = "flex flex-col gap-2 justify-center";
    const user_info = "flex";
    const pfp_container = "w-[155px] h-[155px] rounded-lg overflow-hidden mr-4";

    const joinedDate = formatRelative( new Date( user.createdAt ), new Date() );
    const loginDate = formatRelative( new Date( user.updatedAt ), new Date() )

    return (
        <div className={ topbar }>
            <div className={ user_info }>
                <div className={ pfp_container }>
                    <img src={ user.picture } className="object-cover w-full h-full" alt={ user.name } />
                </div>
                <div className={ "flex flex-col" }>
                    <Editable
                        text={ user.nickname }
                        property="nickname"
                    />
                    <p className={ "text-sm text-gray-400" }>{ user.name }</p>
                    <p className={ "text-sm text-gray-400" }>{ user.email }</p>
                    <Editable
                        text={ user.discordId }
                        property="discordId"
                    />
                    <div className={ "text-sm" }> Joined { joinedDate } </div>
                    {/*<div className={ "text-sm" }> Last logged in { loginDate } </div>*/ }
                    <div className={ "flex items-center mt-2" }>
                        <Image src={ links.icons.zerg } width={ 40 } height={ 40 } />
                        <Image src={ links.icons.protoss } width={ 50 } height={ 50 } />
                        <Image src={ links.icons.terran } width={ 40 } height={ 40 } />
                    </div>
                </div>
            </div>
            { isMe && <div className={ profile_actions }>
                <a href="/api/auth/logout" className={ "btn bg-red-800" }>Logout</a>
                <EditBtn editing={ isEditingProfile } onClick={ setIsEditingProfile } />
            </div> }
        </div>
    );
}

export default UserBanner;