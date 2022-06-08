import React from "react";
import "tailwindcss/tailwind.css";
import "../common/styles/main.css";

import Navbar from "../common/components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0";
import store from "../common/redux/store";
import { Provider } from "react-redux";

function AppWrapper( { Component, pageProps } ) {
    const isServerSideRendered = () => {
        return typeof window === "undefined";
    };

    // if ( process.env.NODE_ENV !== "production" && !isServerSideRendered() ) {
    //     import( "react-dom" ).then( ReactDOM => {
    //         import( "@axe-core/react" ).then( axe => {
    //             axe.default(
    //                 React, ReactDOM, 1000, {} 
    //             );
    //         } );
    //     } );
    // }

    const { user } = pageProps;

    return (
        <UserProvider user={ user }>
            <Provider store={ store }>
                <Navbar />
                <Component { ...pageProps } style={ { height: "100%" } } />
            </Provider>
        </UserProvider>
    );
}

export default AppWrapper;
