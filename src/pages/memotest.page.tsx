import React, { useEffect, useMemo, useState } from "react";
import { useGetUserByIdQuery } from "../common/redux/services/userService";
import store from "../common/redux/store";
import userApi from '../common/redux/services/userService';
import StaticComponent from "@/pages/StaticComponent";
import DynamicComponent from "@/pages/DynamicComponent";

const Kaboom = ( { count } ) => {
    const meaning = () => {
        console.log( "Rendering meaning of kaboom", Date.now() )

        if ( count > 5 ) return <p>KABOOM</p>
        return <p>Waiting...</p>
    }

    return useMemo( () => meaning(), [count] );
}

export default function memotestPage() {
    const [count, setCount] = useState<number>( 0 );
    const [onOdd, setOnOdd] = useState<boolean>( false );

    const handleClick = () => {
        setCount( x => x + 1 );
    }

    useEffect( () => {
        setOnOdd( count % 2 !== 0 )
    }, [count] )

    return <>
        <button onClick={ handleClick }>Increment</button>
        <StaticComponent />
        <DynamicComponent count={ count } />
        <Kaboom count={ count } />
    </>
}