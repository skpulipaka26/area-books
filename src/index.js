import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import App from './App';

import * as serviceWorker from './serviceWorker';

import nyTimesBooks from './reducers/books';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

const initialState = {};
const enhancers = [];
const middleware = [thunk];


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

// redux store composition
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    combineReducers({ nyTimesBooks }),
    initialState,
    composedEnhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
