import { RootState } from "../../store";

export const selectTags = ( state: RootState ) => state.search.tags;
export const selectTag = ( state: RootState, tag: string ) => state.search.tags.find( x => x === tag );
export const selectText = ( state: RootState ) => state.search.text;
export const selectDifficultyFilters = ( state: RootState ) => state.search.difficulty;
export const selectFactionFilters = ( state: RootState ) => state.search.factions;
export const selectIsLoading = ( state: RootState ) => state.search.isLoading;