import React from "react";
import { SetStateUtil } from "./main";

export type ProfileDataEditable = {
    discordId: string,
    gameProfileLink: string,
    gamerTag: string,
    nickname: string,
    profileBio: string,
    twitchLink: string,
};

export type EditableProperties = Array<keyof ProfileDataEditable>;

export type ProfileDataNonEditable = {
    buildOrderLists: unknown[],
    comments: unknown[],
    countryCode: string,
    createdAt: string,
    discordId: string,
    email: string,
    emailVerified: boolean,
    loginCount: number,
    name: string,
    picture: string,
    ratings: unknown[],
    timeZone: string,
    updatedAt: string,
    userId: string,
    userProfileId: string
}

export type ProfileData = ProfileDataEditable & ProfileDataNonEditable;

export type UserProfileContext = Partial<{
    apiUser: ProfileData,
    isEditingProfile: boolean,
    updatedProfile: ProfileDataEditable,
    setUpdatedProfile: SetStateUtil<ProfileDataEditable>,
    setIsEditingProfile: SetStateUtil<boolean>
}>
