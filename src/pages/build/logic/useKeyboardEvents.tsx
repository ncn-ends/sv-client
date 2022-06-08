import { useCallback, useEffect } from "react";
import gamedata from "@/static/gamedata.json";

const useKeyboardEvents = ( {
    setUnits,
    builderShowing,
    setBuilderShowing,
    setBuilderWindowSearchCriteria,
} ): void => {
    const callback = () => {
        setUnits( gamedata.filter( x => x.faction === "Protoss" ) );

        const keyReducer = e => () => {
            console.log( `Key: ${ e.key } has been pressed` );
            console.log( builderShowing );
            if ( builderShowing ) {
                console.log( "asd" );

                /*
                 * return setBuilderWindowSearchCriteria(({ criteria }) => ({
                 *     criteria: criteria + e.key,
                 * }));
                 */
            }

            if ( e.key === "Escape" ) switch ( e.key ) {
            case "Escape":
                // something
                break;
            case "b":
                return setBuilderShowing( prevState => !prevState );
            default:
            }
        };

        window.addEventListener( "keydown", keyReducer );

        return () => window.removeEventListener( "keydown", keyReducer );
    };
    // TODO: what is this?
    useEffect( callback, [ builderShowing ] );
    useEffect( callback, [] );
};

export default useKeyboardEvents;
