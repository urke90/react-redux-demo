import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
    console.log('COUNTER COMPONENT');
    const dispatch = useDispatch();

    const counter = useSelector((state) => {
        // console.log('state', state);
        return state.counter;
    });

    const toggleCounter = useSelector((state) => state.showCounter);

    const incrementCounterHandler = () => dispatch({ type: 'INCREMENT' });
    const decrementCounterHandler = () => dispatch({ type: 'DECREMENT' });
    const incrementByHandler = () =>
        dispatch({ type: 'INCREMENT_BY', amount: 5 });

    const toggleCounterHandler = () => dispatch({ type: 'TOGGLE_COUNTER' });

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {toggleCounter && <div className={classes.value}>{counter}</div>}
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
