import slice, {
    beginnerFilterToggled, expertFilterToggled,
    initialState, intermediateFilterToggled,
    protossFilterToggled, reset, textSet, tagAdded, tagRemoved, terranFilterToggled,
    zergFilterToggled, loadingToggled, loading
} from '../../../src/common/redux/domains/search/searchSlice';
import { Action } from "redux";
import {
    selectTag,
    selectTags,
    selectText,
    selectDifficultyFilters,
    selectFactionFilters, selectIsLoading
} from '../../../src/common/redux/selectors';


describe( "search domain tests", () => {
    const { reducer } = slice;

    test( 'should return the initial state', () => {
        expect( reducer( undefined, {} as Action ) ).toEqual( initialState )
    } )

    test( 'should toggle zerg filter', () => {
        const postToggleAction = reducer( undefined, zergFilterToggled() );
        const currentState = { search: postToggleAction };
        const actual = selectFactionFilters( currentState ).zerg;
        const expected = "disabled";
        expect( actual ).toEqual( expected );
    } )

    test( 'should toggle protoss filter', () => {
        const postToggleAction = reducer( undefined, protossFilterToggled() );
        const currentState = { search: postToggleAction };
        const actual = selectFactionFilters( currentState ).protoss;
        const expected = "disabled";
        expect( actual ).toEqual( expected );
    } )


    test( 'should toggle terran filter', () => {
        const postToggleAction = reducer( undefined, terranFilterToggled() );
        const currentState = { search: postToggleAction };
        const actual = selectFactionFilters( currentState ).terran;
        const expected = "disabled";
        expect( actual ).toEqual( expected );
    } )

    test( 'should toggle beginner filter', () => {
        const postToggleAction = reducer( undefined, beginnerFilterToggled() );
        const currentState = { search: postToggleAction };
        const actual = selectDifficultyFilters( currentState ).beginner;
        const expected = "disabled";
        expect( actual ).toEqual( expected );
    } )

    test( 'should toggle intermediate filter', () => {
        const postToggleAction = reducer( undefined, intermediateFilterToggled() );
        const currentState = { search: postToggleAction };
        const actual = selectDifficultyFilters( currentState ).intermediate;
        const expected = "disabled";
        expect( actual ).toEqual( expected );
    } )

    test( 'should toggle expert filter', () => {
        const postToggleAction = reducer( undefined, expertFilterToggled() );
        const currentState = { search: postToggleAction };
        const actual = selectDifficultyFilters( currentState ).expert;
        const expected = "disabled";
        expect( actual ).toEqual( expected );
    } )


    test( 'should add tag and then remove it', () => {
        const postTagAdding = reducer( undefined, tagAdded( "cheese" ) );
        const currentState = { search: postTagAdding };

        /* Testing singular selector */
        const actualOne = selectTag( currentState, "cheese" );
        const expectedOne = "cheese";
        expect( actualOne ).toEqual( expectedOne );

        /* Testing selector for all tags */
        const actualAll = selectTags( currentState );
        const actualAllLength = actualAll.length;
        const expectedLength = 1;
        expect( actualAllLength ).toEqual( expectedLength );

        const postTagRemoving = reducer( postTagAdding, tagRemoved( "cheese" ) );
        expect( postTagRemoving ).toEqual( initialState );
    } )

    test( 'should set search text', () => {
        const input = "skytoss";
        const postTextSet = reducer( undefined, textSet( input ) );
        const currentState = { search: postTextSet };
        const actual = selectText( currentState );
        const expected = input;
        expect( actual ).toEqual( expected );
    } )

    test( 'should toggle loading state', () => {
        const triggerLoading = reducer( undefined, loading( true ) );
        const statePostLoading = { search: triggerLoading };
        const actualForTrue = selectIsLoading( statePostLoading );
        expect( actualForTrue ).toEqual( true );
        
        const triggerLoadingBack = reducer( triggerLoading, loading( false ) );
        const statePostLoadingBack = { search: triggerLoadingBack };
        const actualForFalse = selectIsLoading( statePostLoadingBack );
        expect( actualForFalse ).toEqual( false );
    } )

    test( 'should reset to default after making changes', () => {
        const afterText = reducer( undefined, textSet( "skytoss" ) );
        const afterFactionToggle = reducer( afterText, protossFilterToggled() );
        const afterDifficultyToggle = reducer( afterFactionToggle, intermediateFilterToggled() );
        const afterTagAddition = reducer( afterDifficultyToggle, tagAdded( "archon" ) );

        const expected = {
            ...initialState,
            factions: {
                ...initialState.factions,
                protoss: "disabled",
            },
            difficulty: {
                ...initialState.difficulty,
                intermediate: "disabled"
            },
            text: "skytoss",
            tags: ["archon"]
        };
        const actual = afterTagAddition;
        expect( actual ).toEqual( expected );

        const afterReset = reducer( afterTagAddition, reset() );
        expect( afterReset ).toEqual( initialState );
    } )
} )