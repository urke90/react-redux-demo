import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

// import { store } from './store';
// import { store } from './store/toolkit';

function App() {
    const isAuthenticated = useSelector(
        (state) => state.authReducer.isAuthenticated
    );

    return (
        <>
            <Header />
            {!isAuthenticated && <Auth />}
            {isAuthenticated && <UserProfile />}
            {isAuthenticated && <Counter />}
        </>
    );
}

export default App;
