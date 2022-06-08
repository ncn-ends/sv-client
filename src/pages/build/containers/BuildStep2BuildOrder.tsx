import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { UnitType } from "../../../common/types/main";
import BuildOrderListItem from "@/components/BuildOrderListItem";
import NoteModal from "../components/NoteModal";
import useBuildOrder from "../logic/useBuildOrder";
import useHandleDrag from "./../logic/useHandleDrag";
import useKeyboardEvents from "./../logic/useKeyboardEvents";
import defaults from "../../../common/static/defaults.json";

type BuilderWindowContainerProps = { units: UnitType[]; handleAddUnit: ( unit: UnitType ) => void };
// TODO: there was a React.memo here. make sure that removing it doesnt break anything
const BuilderWindowContainer = ( props: BuilderWindowContainerProps ) => {
    return (
        <div className={ "BuildWindowContainer" }>
            <p className="text-center text-2xs text-gray-500 mb-5 mt-1">
                Tip: Start typing to filter search
            </p>
            <div className="flex items-center justify-center gap-1 flex-wrap">
                { props.units.map( ( unit: UnitType ) => (
                    <div key={ unit.id } className="tooltip" data-tip={ `${ unit.name }` }>
                        <button onClick={ () => props.handleAddUnit( unit ) }>
                            <Image
                                width={ 40 }
                                height={ 40 }
                                src={ unit.imageLink || defaults.empty_image }
                                alt="Command Center Icon"
                            />
                        </button>
                    </div>
                ) ) }
            </div>
        </div>
    );
};

const BuildPage = (): JSX.Element => {
    // console.log('build page rendered');
    const [ dragItem, setDragItem ] = useState<number>();
    const [ builderShowing, setBuilderShowing ] = useState<boolean>( false );
    const [ units, setUnits ] = useState<any>();
    const [ builderWindowSearchCriteria, setBuilderWindowSearchCriteria ] = useState<{
        criteria: string;
    }>( { criteria: "" } );
    const [ noteModalItem, setNoteModalItem ] = useState<number | null>( null );

    useKeyboardEvents( {
        builderShowing,
        setUnits,
        setBuilderShowing,
        setBuilderWindowSearchCriteria,
    } );

    const [ buildOrder, setBuildOrder ] = useBuildOrder();

    const handleDragUtils = useHandleDrag( {
        dragItem,
        setDragItem,
        buildOrder,
        setBuildOrder,
    } );

    const handleBuilderWindowToggle = e => {
        if ( e.target.id !== "builder-window-btn" && e.target.id !== "builder-window-icon" ) return;
        setBuilderShowing( prevState => !prevState );
    };

    const handleAddUnit = ( unit: UnitType ) => {
        const uuid: string = uuidv4();
        setBuildOrder( prevState => [ ...prevState, { unitId: unit.id, uuid } ] );
    };

    useEffect( () => {
        console.log( buildOrder );
    }, [ buildOrder ] );

    return (
        <>
            <main className="w-full flex items-center justify-center flex-col mt-3 md:mt-6">
                <div className="flex flex-col max-w-2/5 mx-1 items-center">
                    <div className="w-full h-4 bg-base-300 mb-1 rounded-t-box" />
                    <ul className="w-full flex flex-col bg-base-200 dnd">
                        { buildOrder.map( ( item, index ) => (
                            <BuildOrderListItem
                                key={ index }
                                index={ index }
                                { ...handleDragUtils }
                                { ...item }
                                buildOrderLength={ buildOrder.length }
                                setBuildOrder={ setBuildOrder }
                                setNoteModalItem={ setNoteModalItem }
                                pageType="buildPage"
                            />
                        ) ) }
                    </ul>
                    <button
                        id="builder-window-btn"
                        onClick={ handleBuilderWindowToggle }
                        className="w-full bg-base-300 h-12 mt-1 rounded-b-box flex items-center justify-center flex-col relative"
                    >
                        <IoAddCircleOutline
                            className={ "text-neutral-content" }
                            id="builder-window-icon"
                            size={ "2rem" }
                        />
                        { builderShowing && (
                            <BuilderWindowContainer handleAddUnit={ handleAddUnit } units={ units } />
                        ) }
                    </button>
                    <p className="text-2xs text-gray-400 mb-2">Tip: Press b to open the window</p>
                    <p className="text-2xs text-gray-400 text-center">
                        Note: Your progress is saved in localstorage if you have cookies enabled,
                        <br />
                        so that you can come back to it later if you wish.
                    </p>
                </div>
            </main>
            <NoteModal
                noteModalItem={ noteModalItem }
                setNoteModalItem={ setNoteModalItem }
                buildOrder={ buildOrder }
                setBuildOrder={ setBuildOrder }
            />
        </>
    );
};

export default BuildPage;
