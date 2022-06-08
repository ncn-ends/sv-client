import React from "react";

export type UnitType = {
    faction: "Protoss" | "Zerg" | "Terran";
    id: number;
    imageLink: string;
    wikiLink: string;
    description: string;
    name: string;
};

export type SetStateUtil<T> = React.Dispatch<React.SetStateAction<T>>

export type OnChangeFunc = React.ChangeEventHandler<HTMLInputElement>;
 
/**
 * Utility type for functional components
 * Takes in a props generic, which is the type definition for the props object
 */
export type AbstractFC<T extends object> = ( props: T ) => JSX.Element

// export type Component<T> = ( props: T) => JSX.Element;