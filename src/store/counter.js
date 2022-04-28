import { createSlice } from '@reduxjs/toolkit';

const initCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        decrement(state) {
            state.counter = state.counter - 1;
        },
        incrementBy(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
