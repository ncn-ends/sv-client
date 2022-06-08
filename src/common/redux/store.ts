import { configureStore } from '@reduxjs/toolkit';
import searchSlice from "./domains/search/searchSlice";
import { pokemonApi } from "./services/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userService } from "./services/userService";
// import thunkMiddleware from 'redux-thunk'
// import {composeWithDevTools} from "redux-devtools-extension";

// const middlewareEnhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);
// const composedEnhancer = composeWithDevTools(
//     middlewareEnhancer
// )

const store = configureStore( {
    reducer: {
        search: searchSlice.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [userService.reducerPath]: userService.reducer,
    },
    middleware: ( getDefaultMiddleware =>
            getDefaultMiddleware().concat( pokemonApi.middleware ).concat( userService.middleware )
    )
} )

setupListeners( store.dispatch );

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;