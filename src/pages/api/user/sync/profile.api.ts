import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import axios, { AxiosError } from "axios";
import * as https from "https";

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

        const agent = new https.Agent( { rejectUnauthorized: false } );
        const response = await axios.post( `${ process.env.NEXT_PUBLIC_API_SERVER_URL_BASE }user/sync/profile`, {
            ...req.body
        }, {
            httpsAgent: agent,
            headers: {
                Authorization: `Bearer ${ accessToken }`
            }
        } );

        return res.status( 200 ).json( response.data );
    } catch ( e ) {
        console.log( e );
        res
            .status( 500 )
            .json( { error: true, status: 500 } );
    }
} );
