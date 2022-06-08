import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { ProfileData } from "../../types/UserProfile";

export const serviceURL = "https://25dd-2601-1c0-6e00-fcf0-00-186a.ngrok.io"

export const userService = createApi( {
    reducerPath: "userService",
    baseQuery: fetchBaseQuery( {
        baseUrl: serviceURL,
        prepareHeaders: ( headers, { getState } ) => {
            // do token stuff here
            headers.set( "Accept", "application/json" );
            return headers;
        }
    } ),
    endpoints: ( builder ) => ( {
        getUserById: builder.query<ProfileData, string>( {
            query: ( id ) => `user?id=${ id }`
        } )
    } )
} );

export const { useGetUserByIdQuery } = userService;
export default userService;