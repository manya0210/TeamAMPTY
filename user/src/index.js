import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';

import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
        <App />
    </Provider>
);