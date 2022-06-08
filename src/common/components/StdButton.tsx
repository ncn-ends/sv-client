import { AbstractFC, SetStateUtil } from "../types/main";
import { SelectionEnum } from "../redux/domains/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";

type Props = {
    label: string,
    icon?: React.ReactNode
    styling?: string,
    action: () => void;
}
type StdButton = AbstractFC<Props>;

const StdButton: StdButton = ( { label, icon = undefined, styling = "text-sm", action } ) => {

    /* 
     *  Finds the text size included in `styling` 
     *  and returns a tailwind utility class thats incremented by `increase` parameter`
     * */
    // const incrementTextSize = ( increase ) => {
    //     const textSizes = [
    //         "text-2xs",
    //         "text-xs",
    //         "text-sm",
    //         "text-md",
    //         "text-lg"
    //     ]
    //     const pos = textSizes.findIndex( ( size ) => styling.includes( size ) )
    //     if ( pos === -1 ) throw new Error( "Invalid text size passed." )
    //     const incrementedTextSize = textSizes[pos + increase];
    //     if ( !incrementedTextSize ) throw new Error( "Invalid text size passed." )
    //     return incrementedTextSize;
    // }

    return (
        <button
            onClick={ action }
            className={ "std-button " + styling }
        >
            <p className={ "text-black text-xs" }>{ icon }</p>
            <label className="uppercase tracking-widest">{ label }</label>
        </button>
    )
};

export { StdButton };

