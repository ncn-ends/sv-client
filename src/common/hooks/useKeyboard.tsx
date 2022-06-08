import { useEffect } from "react";

const acceptableKeys = [
    "n/a",
    "Cancel",
    "Backspace",
    "Tab",
    "Clear",
    "Enter",
    "Shift",
    "Control",
    "Alt",
    "Pause",
    "CapsLock",
    "Unidentified",
    "Unidentified",
    "Escape",
    " ",
    "PageUp",
    "PageDown",
    "End",
    "Home",
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "F13",
    "Insert",
    "Delete",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ":",
    ";",
    "<",
    "=",
    "ß",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "Meta",
    "Meta",
    "ContextMenu",
    "",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "F13",
    "F14",
    "F15",
    "F16",
    "F17",
    "F18",
    "F19",
    "F20",
    "F21",
    "F22",
    "F23",
    "F24",
    "F25",
    "F26",
    "F27",
    "F28",
    "F29",
    "F30",
    "F31",
    "F32",
    "NumLock",
    "ScrollLock",
    "",
    "[",
    "Dead",
    "$",
    "^ù",
    ")",
    "*",
    "+",
    "",
    "-",
    "AudioVolumeDown",
    "AudioVolumeUp",
    "MediaTrackNext",
    "MediaTrackPrevious",
    "MediaPlayPause",
    "LaunchMail",
    "AudioVolumeMute",
    "AudioVolumeDown",
    "AudioVolumeUp",
    ";",
    "+",
    ",",
    "-",
    ".",
    "/",
    "`",
    "/",
    ".",
    "[",
    "]",
    "'",
    "`",
    "Meta",
    "AltGraph",
    "Unidentified",
    "all"
] as const;

type modifier = "ctrl" | "shift" | "alt" | "meta";
type ActionFunction = ( event: KeyboardEvent ) => void;

interface KeyDownCondition {
    key: typeof acceptableKeys[number],
    mods?: modifier[],
    action: ActionFunction
}

type UseKeyboard = ( keys: KeyDownCondition[] ) => void;

/**
 * Custom hook to handle keyboard pressdown events.
 * @param keyConditions - An array of key conditions to handle.
 * @example
 * Handles an event which focuses an element by id when ctrl+f is pressed:
 * ```
 * useKeyboard( [{
 *      key: "f", mods: ["ctrl"], action: ( e ) => {
 *          e.preventDefault();
 *          document.querySelector( "#filter-searchbar" ).focus();
 *      }
 * }] );
 * ```
 */
const useKeyboard: UseKeyboard = ( keyConditions ) => {
    const unknownKeys = keyConditions.filter( cond => !acceptableKeys.includes( cond.key ) );
    if ( unknownKeys.length ) {
        console.warn( "Some key event conditions include unknown keys. This is probably due to a typo.\nView the docs for a list of acceptable keys: ", unknownKeys ) // TODO: write the correct link to documentation here.
    }

    useEffect( () => {
        function handleKeyDown( event: KeyboardEvent ) {
            const foundMatch = keyConditions.find( condition => {
                if ( event.key !== condition.key ) return false;
                if ( !condition.mods ) return true;
                const matchesMods = condition.mods.every( mod => event[mod + "Key"] );
                if ( matchesMods ) return true;
            } )

            const defaultAction = keyConditions.find( condition => condition.key === "all" );
            if ( defaultAction ) defaultAction.action( event );
            if ( !foundMatch ) return;

            foundMatch.action( event );
        }

        document.addEventListener( 'keydown', handleKeyDown );

        return function cleanup() {
            document.removeEventListener( 'keydown', handleKeyDown );
        }
    }, [] );
}

export { useKeyboard };