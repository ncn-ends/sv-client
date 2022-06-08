import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import * as https from "https";
import { getUserByBearerFromApi } from "../../../common/queries/rProxy";

export default withApiAuthRequired( async ( req, res ) => {
    try {
        /*
         * If your Access Token is expired and you have a Refresh Token
         * `getAccessToken` will fetch you a new one using the `refresh_token` grant
         */
        const { accessToken } = await getAccessToken(
            req, res, {
                refresh: true,
                scopes: [
                    "openid",
                    "profile",
                    "email"
                ]
            }
        );
        const userData = await getUserByBearerFromApi( { accessToken } );
        // console.log( userData );
        return res.status( 200 ).json( userData );
    } catch ( e ) {
        // console.log( e );
        res
            .status( 500 )
            .json( { error: true, status: 500 } );
    }
} );
