import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import Components from './components';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <Provider store={store}>
            <Components/>
        </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
