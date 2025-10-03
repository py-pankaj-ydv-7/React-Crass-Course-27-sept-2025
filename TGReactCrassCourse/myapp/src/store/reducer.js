import { createAction, createReducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const increment = createAction("counter/increment")
const incrementByAmout = createAction("counter/incrementByAmout");

const initialState = {value: 0};

const rootReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state, action) => {
        state.value++;
    })
    .addCase(incrementByAmout, (state, action) => {
        state.value += action.payload;
    });
});

export {incrementByAmout}

export default rootReducer;

