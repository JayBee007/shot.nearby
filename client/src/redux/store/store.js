import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import state from "../reducers/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(state, enhancer);

export default store;
