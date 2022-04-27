import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => state.counter + 1,
        decrement: (state) => state.counter - 1,
        incrementBy: (state, action) => state.counter + action.payload,
        toggleCounter: (state) => !state.showCounter
    }
});

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});
