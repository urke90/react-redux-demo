import { createStore } from 'redux';

const initCounterState = {
    counter: 0,
    bla: {
        n: 0,
        l: 1,
        g: 2
    }
};

const counterReducer = (state = initCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        case 'INCREMENT_BY':
            return {
                counter: state.counter + action.amount
            };
        default:
            return state;
    }
};

export const store = createStore(counterReducer);
