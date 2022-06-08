import { StdInput } from "@/components/StdInput";
import { useDispatch, useSelector } from "react-redux";
import {
    selectDifficultyFilters,
    selectFactionFilters,
    selectIsLoading,
    selectText
} from "@/domains/search/selectors";
import { ButtonGroup } from "./ButtonGroup";
import { StdButton } from "@/components/StdButton";
import { GiSaveArrow } from 'react-icons/gi';
import { GrPowerReset } from 'react-icons/gr';
import { debounce } from "@/hooks/debounce";
import { useCallback, useState } from "react";

type Props = {
    isMenuExpanded: boolean
};
type FilterControl = ( props: Props ) => JSX.Element;

const FilterControl: FilterControl = ( { isMenuExpanded } ) => {

    const twExpanded = isMenuExpanded ? "max-h-48" : "max-h-0";
    const dispatch = useDispatch();

    const factionFilters = useSelector( selectFactionFilters );
    const difficultyFilters = useSelector( selectDifficultyFilters );

    /**
     * bufferSearchText is for search input visuals, but isnt actually used for filtering logic
     * redux dispatch for textfield is debounced using the value from bufferSearchText
     */
    const [bufferSearchText, setBufferSearchText] = useState<string>( "" );
    const handleDispatchTextSearch = ( text ) => dispatch( {
        type: "search/textSet",
        payload: text
    } );
    const debouncedTextSet = useCallback( debounce( () => {
        dispatch( { type: "search/loading", payload: false } )
        handleDispatchTextSearch( bufferSearchText )
    }, 1250 ), [] );
    const debouncedHandler = ( e ) => {
        dispatch( { type: "search/loading", payload: true } )
        setBufferSearchText( e.target.value );
        debouncedTextSet();
    };


    return (
        <div className={ "flex flex-row duration-200 w-full overflow-hidden " + twExpanded }>
            <div className={ "filter-menu-column" }>
                <div className="flex flex-col">
                    <ButtonGroup label={ "faction" } filters={ factionFilters } />
                    <ButtonGroup label={ "difficulty" } filters={ difficultyFilters } />
                </div>
            </div>

            <div className={ "filter-menu-column subtle-border-x w-1/2 my-2" }>
                <div className="relative">
                    <StdInput
                        label="Search"
                        action={ ( e ) => debouncedHandler( e ) }
                        value={ bufferSearchText }
                    />
                    <aside className="disclaimer-text">
                        <p>Tip: You can press cltr+f anywhere on the page to jump back to the search bar.</p>
                        <p>You can also press ESC to close the filter menu.</p>
                    </aside>
                </div>
                <StdInput label="Tags" scale={ ".85" } />
            </div>
            <div className={ "filter-menu-column items-center" }>
                <div>
                    <div className="flex mb-2">
                        <StdButton
                            label={ "save" }
                            icon={ <GiSaveArrow /> }
                            styling={ "std-button-action cursor-not-allowed" }
                            action={ () => console.log( "Save button not hooked up yet." ) }
                        />
                        <StdButton
                            label={ "reset" }
                            icon={ <GrPowerReset /> }
                            styling={ "std-button-action" }
                            action={ () => dispatch( { type: `search/reset` } ) }
                        />
                    </div>
                    <button
                        className="std-button-action-notable cursor-not-allowed"
                        onClick={ () => console.log( "Saved searches not hooked up yet." ) }
                    >
                        <label>Saved Searches</label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { FilterControl };