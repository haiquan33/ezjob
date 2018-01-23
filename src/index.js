import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';


import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


import { rootReducer } from './Redux/jobRedux.js';




const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(middleware,thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f, 
  )
)


ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('root'));

