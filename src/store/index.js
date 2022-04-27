import { createStore } from 'redux';

const initCounterState = {
    counter: 0,
    showCounter: true
};

const counterReducer = (state = initCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'INCREMENT_BY':
            return {
                ...state,
                counter: state.counter + action.amount
            };
        case 'TOGGLE_COUNTER':
            return {
                ...state,
                showCounter: !state.showCounter
            };
        default:
            return state;
    }
};

export const store = createStore(counterReducer);
