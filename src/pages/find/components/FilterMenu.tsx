import { BsArrowsCollapse } from 'react-icons/bs'
import { ExpandButton } from "./ExpandButton";
import { useEffect, useState } from "react";
import { FilterControl } from "./FilterControl";
import { useKeyboard } from "@/hooks/useKeyboard";

const FilterMenu = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>( true );

    const twUnderline = isMenuExpanded ? "underline-expanded text-lg" : "text-md text-gray-400";

    useKeyboard( [
        {
            key: "f", mods: ["ctrl"], action: ( e ) => {
                e.preventDefault();
                setIsMenuExpanded( true );
                document.querySelector( "#searchTextInput" ).focus();
            }
    },
        {
            key: "Escape", action: () => {
                setIsMenuExpanded( false );
            }
        }
    ] );

    return (
        <aside className="relative shadow-2xl body-panel bg-gray-800 rounded-md flex flex-col items-center shadow-lg z-20">
            <h2 className={ "title text-center w-1/4 expanding-underline duration-200 " + twUnderline }>Filter Menu</h2>
            <FilterControl isMenuExpanded={ isMenuExpanded } />
            <ExpandButton
                isMenuExpanded={ isMenuExpanded }
                setIsMenuExpanded={ setIsMenuExpanded }
            />
        </aside>
    )
};

export { FilterMenu };