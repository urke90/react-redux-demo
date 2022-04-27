import { createStore } from 'redux';

const initCounterState = {
    counter: 0
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
        default:
            throw new Error('NO ACTION WITH SUCH TYPE');
    }
};

export const store = createStore(counterReducer);
