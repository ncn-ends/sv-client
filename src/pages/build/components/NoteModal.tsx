import React, { useEffect, useRef } from "react";
import Portal from "../../../common/hooks/Portal";

const NoteModal = ( {
                        noteModalItem, buildOrder, setBuildOrder, setNoteModalItem
                    } ) => {
    if ( noteModalItem === null ) return null;

    const noteValue = buildOrder[noteModalItem].note;

    const textBoxRef = useRef( null );

    useEffect( () => {
        textBoxRef.current.focus();
        textBoxRef.current.selectionStart = textBoxRef.current.value.length;
        textBoxRef.current.selectionEnd = textBoxRef.current.value.length;
    }, [noteModalItem] );

    const updateNote = e => {
        setBuildOrder( prev => {
            const state = [...prev];
            state[noteModalItem].note = e.target.value;

            return state;
        } );
    };

    const wrapperRef = useRef( null );
    useEffect( () => {
        function handleClickOutside( event ) {
            if ( wrapperRef.current && !wrapperRef.current.contains( event.target ) ) {
                setNoteModalItem( null );
            }
        }

        document.addEventListener( "mousedown", handleClickOutside );

        return () => {
            document.removeEventListener( "mousedown", handleClickOutside );
        };
    }, [] );

    return (
        <Portal id="modal">
            <div className="fixed top-0 left-0 w-full h-full bg-base-300 z-10 bg-opacity-75">
                <div
                    className="w-[calc(100%-1rem)] md:w-2/3 lg:w-[35rem] min-h-64 bg-base-300 absolute centered shadow-md border-2 border-black p-3"
                    ref={ wrapperRef }
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Note</span>
                        </label>
                        <textarea
                            className="textarea h-24"
                            placeholder="Note"
                            ref={ textBoxRef }
                            value={ noteValue }
                            onChange={ updateNote }
                        />
                    </div>
                    <p className="text-2xs text-gray-400 text-center mt-2">
                        Tip: Click outside or press Esc to close window
                    </p>
                </div>
            </div>
        </Portal>
    );
};

export default NoteModal;
