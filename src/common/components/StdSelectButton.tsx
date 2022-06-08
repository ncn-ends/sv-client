import { AbstractFC, SetStateUtil } from "../types/main";
import { SelectionEnum } from "../redux/domains/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import links from '../static/links.json';

type StdSelectButton = AbstractFC<{
    label: string,
    selection: SelectionEnum,
    hasBackground?: boolean,
    icon?: React.ReactNode
}>

const StdSelectButton: StdSelectButton = ( { label, selection, hasBackground = false, icon } ) => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch( { type: `search/${ label }FilterToggled` } );

    return (
        <button
            className={ "std-button-selection " + selection  }
            onClick={ handleClick }
            style={ !hasBackground ? {} : { backgroundImage: `url(${ links.sigils[label] })` } }
        >
            <div className="text-black text-md">{ icon }</div>
            <p className="uppercase tracking-widest text-2xs">{ label }</p>
        </button>
    )
};

export { StdSelectButton };

