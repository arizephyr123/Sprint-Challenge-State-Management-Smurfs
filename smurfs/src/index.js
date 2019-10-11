import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//import reducer
import rootReducer from './reducers'

//import provider then wrap App below and pass in store
import { Provider } from 'react-redux';

//create store, pass in rootReducer and applyMiddleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
