import { createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";
import RootReducer from "../reducers/root";
import thunk from "redux-thunk";

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
