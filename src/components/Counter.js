import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/toolkit';

import classes from './Counter.module.css';

const Counter = () => {
    // console.log('COUNTER COMPONENT');
    // console.log('counterActions', counterActions);
    const dispatch = useDispatch();

    const counter = useSelector((state) => {
        // console.log('state', state);
        return state.counterReducer.counter;
    });

    console.log('counter', counter);

    const showCounter = useSelector(
        (state) => state.counterReducer.showCounter
    );

    const incrementCounterHandler = () => {
        console.log('oplio increment');
        dispatch(counterActions.increment());
    };
    const decrementCounterHandler = () => dispatch(counterActions.decrement());
    const incrementByHandler = () =>
        dispatch({ type: 'INCREMENT_BY', amount: 5 });

    const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={decrementCounterHandler}>Decrement</button>
                <button onClick={incrementByHandler}>ADD 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
