import { useSelector, useDispatch } from 'react-redux';

// import { authActions } from '../store/toolkit';
import { authActions } from '../store/auth';

import classes from './Header.module.css';

const Header = () => {
    const isAuthenticated = useSelector((state) => {
        console.log('state u header', state);
        return state.authReducer.isAuthenticated;
    });

    const dispatch = useDispatch();

    const logoutHandler = () => dispatch(authActions.logout());

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    {isAuthenticated && (
                        <li>
                            <a href="/">My Products</a>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
