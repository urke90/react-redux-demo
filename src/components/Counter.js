import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
    // console.log('COUNTER COMPONENT');

    const counter = useSelector((state) => {
        // console.log('state', state);
        return state.counter;
    });

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
