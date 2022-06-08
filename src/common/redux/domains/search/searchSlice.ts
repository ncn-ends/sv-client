import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SelectionEnum = "active" | "disabled" | "neutral";

export type SearchState = {
    text: string,
    isLoading: boolean,
    factions: {
        protoss: SelectionEnum,
        zerg: SelectionEnum,
        terran: SelectionEnum
    },
    difficulty: {
        beginner: SelectionEnum,
        intermediate: SelectionEnum,
        expert: SelectionEnum
    },
    tags: string[]
}

export const initialState: SearchState = {
    text: "",
    isLoading: false,
    factions: { protoss: "active", zerg: "active", terran: "active" },
    difficulty: { beginner: "active", intermediate: "active", expert: "active" },
    tags: []
}

const rotateSelection = ( selection: SelectionEnum ): SelectionEnum => {
    if ( selection === "active" ) return "disabled";
    if ( selection === "disabled" ) return "neutral";
    if ( selection === "neutral" ) return "active";
}

const searchSlice = createSlice( {
    name: 'search',
    initialState,
    reducers: {
        reset() {
            return initialState;
        },
        textSet( state, action: PayloadAction<string> ) {
            return { ...state, text: action.payload }
        },
        zergFilterToggled( state ) {
            return {
                ...state,
                factions: {
                    ...state.factions,
                    zerg: rotateSelection( state.factions.zerg )
                }
            }
        },
        protossFilterToggled( state ) {
            return {
                ...state,
                factions: {
                    ...state.factions,
                    protoss: rotateSelection( state.factions.protoss )
                }
            }
        },
        terranFilterToggled( state ) {
            return {
                ...state,
                factions: {
                    ...state.factions,
                    terran: rotateSelection( state.factions.terran )
                }
            }
        },
        beginnerFilterToggled( state ) {
            return {
                ...state,
                difficulty: {
                    ...state.difficulty,
                    beginner: rotateSelection( state.difficulty.beginner )
                }
            }
        },
        intermediateFilterToggled( state ) {
            return {
                ...state,
                difficulty: {
                    ...state.difficulty,
                    intermediate: rotateSelection( state.difficulty.intermediate )
                }
            }
        },
        expertFilterToggled( state ) {
            return {
                ...state,
                difficulty: {
                    ...state.difficulty,
                    expert: rotateSelection( state.difficulty.expert )
                }
            }
        },
        tagAdded( state, action: PayloadAction<string> ) {
            return {
                ...state,
                tags: [
                    ...state.tags,
                    action.payload
                ]
            }
        },
        tagRemoved( state, action: PayloadAction<string> ) {
            return {
                ...state,
                tags: state.tags.filter( x => x !== action.payload )
            }
        },
        loading( state, action: PayloadAction<boolean> ) {
            return {
                ...state,
                isLoading: action.payload
            }
        }
    }
} )

export const {
    reset,
    textSet,
    zergFilterToggled,
    protossFilterToggled,
    terranFilterToggled,
    beginnerFilterToggled,
    intermediateFilterToggled,
    expertFilterToggled,
    loading,
    tagAdded,
    tagRemoved
} = searchSlice.actions;

export default searchSlice;