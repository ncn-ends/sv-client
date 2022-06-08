import React from "react";
import { FilterMenu } from "./components/FilterMenu";
import { LoadingFade } from "@/pages/find/components/LoadingFade";
import { FilterList } from './components/FilterList'

const ListRow = ( { style, index } ) => {
    return (
        <div style={ style }>Something: { index }</div>
    )
}

export default function FindPage( {} ) {

    return (
        <div className="relative pt-2 min-h-[120vh]">
            <FilterMenu />
            <main className="mt-4">
                <FilterList row={ ListRow } />
            </main>
            <LoadingFade />
        </div>
    );
}