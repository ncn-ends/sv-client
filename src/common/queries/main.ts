import axios, { AxiosError, AxiosResponse } from "axios";
import https from "https";

export const handleError = ( e ): void => {
    const err = e as AxiosError;
    if ( err.response ) {
        /**
         * The request was made and the server responded with a non-2xx status code
         */
        console.error( "Client Request Error", {
             status: err.response.status,
             resHeaders: err.response.headers,
             reqHeaders: err.request.headers,
             url: err.config.baseURL + err.config.url,
             method: err.config.method
         } );
    } else if ( err.request ) {
        /**
         * Request was made but no response was received
         */
        console.log( err.request );
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log( 'Error', err.message );
    }
}

export const handleSuccess = <T>( res: AxiosResponse<T> ): T => {
    return res.data;
}


const apiInstance = axios.create( {
    baseURL: process.env.CLIENT_SERVER_BASE_URL,
    httpsAgent: new https.Agent( {
        rejectUnauthorized: process.env.NODE_ENV === "production"
    } ),
} );