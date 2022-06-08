import React, { useEffect } from "react";
import { getUserByBearerFromApi, getUserByBearerFromRProxy } from "../common/queries/rProxy";

const StyleTestingPage = () => {
    useEffect( () => {
        ( async () => {
            const test = await getUserByBearerFromRProxy();
            console.log( test );
        } )()
    }, [] )

    return (
        <>
            <div className={ "bg-red-500 p-4 bg-blue-500 pl-48" }>wip</div>
            <div className="body-panel bg-red-400">
                <h1>Fuck</h1>
            </div>
        </>
    );
};

/*
 * export const getServerSideProps: GetServerSideProps = async() => {
 *     try {
 *         return { props: {}, };
 *     }
 *     catch ( err ) {
 *         console.log( err );
 *     }
 * };
 */

export default StyleTestingPage;