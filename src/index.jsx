// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/App';
import '../assets/stylesheets/application.scss';

import messagesReducer from "./reducers/messagesReducer";
import usernameReducer from "./reducers/usernameReducer";
import selectedChannelReducer from "./reducers/selectedChannelReducer";

const middlewares = applyMiddleware(reduxPromise, logger);

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  username: usernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
