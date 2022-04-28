// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialCounterState = {
//     counter: 0,
//     showCounter: true
// };

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter = state.counter + 1;
//         },
//         decrement(state) {
//             state.counter = state.counter - 1;
//         },
//         incrementBy(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter: (state) => {
//             state.showCounter = !state.showCounter;
//         }
//     }
// });

// const authInitState = {
//     isAuthenticated: false
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: authInitState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         }
//     }
// });

// // console.log('counterSlice', counterSlice);

// export const counterActions = counterSlice.actions;

// export const authActions = authSlice.actions;

// export const store = configureStore({
//     reducer: {
//         counterReducer: counterSlice.reducer,
//         authReducer: authSlice.reducer
//     }
// });
