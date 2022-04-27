import { Provider } from 'react-redux';

import Counter from './components/Counter';
// import { store } from './store';
import { store } from './store/toolkit';

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default App;

/**
 * WE SHOULD:
 * 1. Create store
 * 2. create reducer for counter
 * 3. DO NOT SUBSCRIBE
 * 4. create INCREMENT action
 * 5. create DECREMENT action
 */
