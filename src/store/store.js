import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/index';
import todoReducer from './reducers/todoReducer';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(todoReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;