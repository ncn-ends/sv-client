import axios from "axios";
import { ProfileData } from "../types/UserProfile";
import https from "https";
import { handleError, handleSuccess } from "./main";

const rProxyInstance = axios.create( {
    baseURL: process.env.NEXT_PUBLIC_CLIENT_SERVER_BASE_URL + "api/"
} );

const apiInstance = axios.create( {
    baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL_BASE,
    httpsAgent: new https.Agent( {
        rejectUnauthorized: process.env.NODE_ENV === "production"
    } ),
} );


export const getUserByUserId = async ( user_id: string ): Promise<ProfileData> => {
    const data = await apiInstance
        .get( `user?id=${ user_id }` )
        .then( handleSuccess )
        .catch( handleError );
    return data;
};

export const getUserByBearerFromRProxy = async (): Promise<ProfileData> => {
    const data = await rProxyInstance
        .get( `user/me` )
        .then( handleSuccess )
        .catch( handleError );
    return data;
};

export const getUserByBearerFromApi = async ( { accessToken }: { accessToken: string } ): Promise<ProfileData> => {
    const data = await apiInstance.get( `user/me`, {
        headers: { Authorization: `Bearer ${ accessToken }` }
    } ).then( handleSuccess )
        .catch( handleError );

    return data;
}