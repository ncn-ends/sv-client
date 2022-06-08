import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BuildStepState {
    value: number
}

const initialState: BuildStepState = { value: 1, };

export const buildStepSlice = createSlice( {
    name: "buildStep",
    initialState,
    reducers: {
        increment: state => {
            state.value += state.value === 3 ? 0 : 1;
        },
        decrement: state => {
            state.value -= state.value === 1 ? 0 : 1;
        },
        incrementByAmount: ( state, action: PayloadAction<number> ) => {
            state.value += action.payload;
        }
    }
} );

export const {
    increment, decrement, incrementByAmount
} = buildStepSlice.actions;
export default buildStepSlice.reducer;