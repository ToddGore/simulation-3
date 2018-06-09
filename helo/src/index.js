import React from 'react';
import './index.css';
import './reset.css';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'



// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
