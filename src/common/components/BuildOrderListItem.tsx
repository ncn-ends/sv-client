import React from "react";
import Image from "next/image";
import { IoIosReturnRight } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import gamedata from "../static/gamedata.json";
import defaults from "../static/defaults.json";

const MobileUpDownBtns = ( {
    index, moveItemUp, moveItemDown, buildOrderLength
} ) => (
    <div className="w-10 flex flex-col items-center lg:hidden">
        <button onClick={moveItemUp}>
            <MdKeyboardArrowUp
                className={`w-full h-[20px] p-0 m-0 ${ index === 0 ? "text-gray-600" : "" }`}
            />
        </button>
        <button onClick={moveItemDown}>
            <MdKeyboardArrowDown
                className={
                    `w-full h-[20px] p-0 m-0 ${ 
                        index === buildOrderLength - 1 ? "text-gray-600" : "" }`
                }
            />
        </button>
    </div>
);

const InRowNoteInput = ( { updateNote, value } ) => {
    return (
        <input
            type="text"
            className="input md:w-[14rem] w-1/3 h-8 p-1 md:p-3  hidden md:flex"
            placeholder="Note..."
            onChange={updateNote}
            value={value}
            onFocus={updateNote}
        />
    );
};

const MobileOpenDetailsBtn = ( { onClick } ) => (
    <button
        className="md:hidden pl-2 pr-3 py-1.5 bg-base-100 rounded-lg mr-2 tracking-wider text-sm text-blue-300 flex items-center"
        onClick={onClick}
    >
        <IoIosReturnRight className="ml-1" size={"1.5em"} />
        <span>Details</span>
    </button>
);

const WorkerInput = () => (
    <input type="number" className="hidden md:flex input w-8 h-8 float-left" placeholder="#" />
);

const CloseBtn = ( { onClick } ) => (
    <button className="text-red-700 text-2xl mr-2 md:mr-0" onClick={onClick}>
        <IoCloseOutline />
    </button>
);
const BuildOrderListItem = props => {
    const unit = gamedata.find( unitData => unitData.id === props.unitId );

    const updateNote = e => {
        const isOverflowing = e.target.scrollWidth > e.target.clientWidth;

        if ( isOverflowing ) props.setNoteModalItem( props.index );

        props.setBuildOrder( prev => {
            const state = [ ...prev ];
            state[props.index].note = e.target.value;

            return state;
        } );
    };

    const removeItem = () => props.setBuildOrder( prev => prev.filter( x => x.uuid !== props.uuid ) );

    // TODO: figure this part out better
    const moveItemUp = () => {
        props.setBuildOrder( prev => {
            const state = [ ...prev ];
            [ state[props.index], state[props.index - 1] ] = [ state[props.index - 1], state[props.index], ];

            return state;
        } );
    };

    const moveItemDown = () => {
        props.setBuildOrder( prev => {
            const state = [ ...prev ];
            [ state[props.index], state[props.index + 1] ] = [ state[props.index + 1], state[props.index], ];

            return state;
        } );
    };

    const listProps = { buildPage: {
        draggable: true,
        key: props.uuid,
        onDragStart: () => props.handleDragStart( props.index ),
        onDragEnter: e => props.handleDragEnter( e, props.index ),
        onDragLeave: e => props.handleDragLeave( e ),
        onDrop: e => props.handleDrop( e ),
        onDragOver: e => e.preventDefault(),
    }, }[props.pageType]; // change this to props.pageType

    /*
     * const isBuildPage = props.pageType === 'buildPage';
     * const isBPage =
     */

    switch ( props.pageType ) {
    case "buildPage":
        return (
            <li
                {...listProps}
                className="w-full border-b-2 border-black flex items-center justify-between pr-1;"
            >
                <div className="flex">
                    <MobileUpDownBtns
                        index={props.index}
                        moveItemUp={moveItemUp}
                        moveItemDown={moveItemDown}
                        buildOrderLength={props.buildOrderLength}
                    />
                    <Image
                        layout="fixed"
                        width={40}
                        height={40}
                        src={unit.imageLink || defaults.empty_image}
                        alt="Command Center Icon"
                    />
                    <div className="p-2 ml-2 md:w-48">{unit.name}</div>
                </div>
                <div className="flex gap-2 justify-end">
                    <InRowNoteInput value={props.note} updateNote={updateNote} />
                    <WorkerInput />
                    <MobileOpenDetailsBtn onClick={() => props.setNoteModalItem( props.index )} />
                    <CloseBtn onClick={removeItem} />
                </div>
            </li>
        );
    case "bPage":
        return (
            <li
                {...listProps}
                className="w-full border-b-2 border-black flex items-center justify-between pr-1"
            >
                <div className="flex h-full justify-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center text-xs">
                        <span className="mr-1">16</span> <Image width={15} height={15} src="https://i.imgur.com/m5CzztB.png" />
                    </div>
                    <Image
                        layout="fixed"
                        width={40}
                        height={40}
                        src={unit.imageLink || defaults.empty_image}
                        alt="Command Center Icon"
                    />
                    <div className="p-2 ml-2 w-36 md:w-48 text-sm md:text-md">{unit.name}</div>
                </div>
                <div className="flex gap-2 justify-end w-full">
                    <div className="mr-2 text-xs py-2 text-gray-400 w-full flex justify-center">
                        {props.note || "-"}
                    </div>
                    {/* <MobileOpenDetailsBtn onClick={_ => props.setNoteModalItem(props.index)} /> */}
                </div>
            </li>
        );
    default:
        throw new Error( "invalid pageType prop" );
    }
};

export default BuildOrderListItem;
