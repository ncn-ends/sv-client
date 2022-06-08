import { useState } from "react";

export default function useHandleDrag( {
    dragItem, setDragItem, buildOrder, setBuildOrder
} ) {
    // const [state, setState] = useState<{ state: string }>({ state: '' });

    const handleDragStart = ( index: number ): void => {
        setDragItem( index );
    };

    const handleDragEnter = ( e, index: number ): void => {
        // e.target.style.backgroundColor = '#336699';
        e.target.style.marginTop = ".5rem";
        e.target.style.marginBottom = ".5rem";
        const newBuildOrder = [ ...buildOrder ];
        const item = newBuildOrder[dragItem];
        newBuildOrder.splice( dragItem, 1 );
        newBuildOrder.splice(
            index, 0, item 
        );
        setDragItem( index );
        setBuildOrder( newBuildOrder );
    };

    const handleDragLeave = e => {
        // e.target.style.backgroundColor = 'black';
        e.target.style.marginTop = "0";
        e.target.style.marginBottom = "0";
    };

    const handleDrop = e => {
        // e.target.style.backgroundColor = 'black';
        e.target.style.marginTop = "0";
        e.target.style.marginBottom = "0";
    };

    return {
        handleDrop, handleDragLeave, handleDragEnter, handleDragStart
    };
}
