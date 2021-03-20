import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";

import AuthReducer from "./store/reducers/auth";
import InputReducer from './store/reducers/Inputes';

const rootReducer = combineReducers({
  auth: AuthReducer,
  inp: InputReducer
})

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log('[middlerware] dispatching', action );
      const result = next(action);
      //console.log('[middleware] next to state', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
