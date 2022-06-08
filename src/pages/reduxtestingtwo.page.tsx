import React, { useEffect } from "react";
import { useGetUserByIdQuery } from "../common/redux/services/userService";
import store from "../common/redux/store";
import userApi from '../common/redux/services/userService';

export default function ReduxtestingtwoPage() {
    const { data, error, isLoading } = useGetUserByIdQuery( 'od914771371647725619' )

    // useEffect( () => {
    //     error && console.log( error );
    //     isLoading && console.log( isLoading );
    //     data && console.log( data );
    // }, [data, error, isLoading] )

    if ( error ) return <div>Something went wrong.</div>
    if ( isLoading ) return <div>Loading...</div>

    return <>
        <div>{ data.userProfileId }</div>
        <img src={ data.picture } />
    </>
}