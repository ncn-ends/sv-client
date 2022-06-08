import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "@/domains/search/selectors";

const LoadingFade = () => {
    const isLoading = useSelector( selectIsLoading );
    const twHidden = isLoading ? "" : "hidden opacity-0";
    
    return (
        <aside
            className={ "absolute top-0 left-0 w-full h-full bg-black-faded z-5 flex justify-center " + twHidden }
        >
            <img className="w-12 h-12 mt-80" src="/img/ring-loader.svg" alt="Loading indicator" />
        </aside>
    )
}

export { LoadingFade }