import gameData from "@/static/gamedata.json";
import Image from "next/image";
import { BsStar } from "react-icons/bs";
import React, { useCallback, useMemo } from "react";
import links from '@/static/links.json'

const randomUnitIcons = () => {
    const randomUnit = () => gameData[Math.floor( gameData.length * Math.random() )];

    return Array.from( { length: 20 }, () => (
        <div className="m-[1px] flex items-center">
            <Image src={ randomUnit().imageLink } width="20px" height="20px" />
        </div>
    ) );
};

const TagTemplate = (): JSX.Element => {
    const randomTag = () => {
        const tags = [
            "cheese",
            "macro",
            "towerrush",
            "rush",
            "earlygame",
            "lategame"
        ];

        return tags[Math.floor( Math.random() * tags.length )];
    };

    return (
        <div
            className="text-2xs p-[1px] px-[2px] rounded-sm bg-base-300 m-[2px] cursor-pointer hover:text-blue-300 hover:bg-base-100">
            { randomTag() }
        </div>
    );
};

// 99%
const Wrapped = ( { style, key } ): JSX.Element => {
    const randomPortrait = () => {
        const icons = Object.values( links.icons );

        return icons[Math.floor( Math.random() * icons.length )];
    };

    const tempTitle = () => {
        const titles = [
            "PvX Macro Toss - Carriers/Colossus",
            "Pfoe's TvP Plat to Master Build Order #2",
            "PvT - Proxy Double Robo (with VOD)",
            "TvT: All-Rounder Ladder Build",
            "Railgan ZvT - 3 Roach Opener 2021 - Allin Version",
        ];

        return titles[Math.floor( Math.random() * titles.length )];
    };

    return (
        <div style={ style } key={ key }>
            <div className="w-full h-full flex items-center justify-center border-2 border-gray-700">
                <div className="w-4/5 bg-base-200 h-[45px] flex items-center rounded-md">
                    <div
                        data-tip="Favorite"
                        className="tooltip w-[4%] flex justify-center cursor-pointer hover:text-blue-300"
                    >
                        <BsStar />
                    </div>
                    <div className="w-[5%] text-center flex items-center">
                        <Image src={ randomPortrait() } width="30px" height="30px" />
                    </div>
                    <div className="w-[35%] text-sm">{ tempTitle() }</div>
                    <div className="w-[20%] h-full py-[2px] flex flex-wrap justify-start items-start overflow-hidden">
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                        <TagTemplate />
                    </div>
                    <div
                        className="w-[15%] px-2 flex flex-wrap h-full justify-start items-start py-[2px] overflow-hidden">
                        { randomUnitIcons() }
                    </div>
                    <div className="w-[5%] text-xs">Easy</div>
                    <div className="w-[5%] text-xs flex-col text-center">
                        <div className="text-green-600">70%</div>
                        <div className="">4.6k votes</div>
                    </div>
                    <div className="w-[10%] text-xs text-center">6 days ago</div>
                </div>
            </div>
        </div>
    );
};
const ListItem = React.memo( Wrapped );
export { ListItem }