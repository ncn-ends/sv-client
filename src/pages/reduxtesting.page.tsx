import React, { useEffect } from "react";
import { getUserByBearerFromApi, getUserByBearerFromRProxy } from "../common/queries/rProxy";
import { useDispatch, useSelector } from 'react-redux';
import SomeComponent from "./SomeComponent";

const selectPageNumber = state => state.pageNumber;

const StyleTestingPage = () => {
    const pageNumber = useSelector( selectPageNumber );
    const dispatch = useDispatch();

    const handleClick = () => dispatch( { type: "page/incremented" } );

    return (
        <>
            <div className={ "bg-red-500 p-4 bg-blue-500 pl-48" }>wip</div>
            <div className="body-panel bg-red-400">
                <h1>Fuck</h1>
                <p>{ pageNumber }</p>
                <button onClick={ handleClick }>Increment Page</button>
            </div>
            <SomeComponent text={ "Ok" } />
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