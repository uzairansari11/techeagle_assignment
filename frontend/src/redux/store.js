import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./carts/reducer";
import { authenticationReducer } from "./authentication/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  authenticationReducer,
});

export const store = legacy_createStore(rootReducer, enhancer(applyMiddleware(thunk)));
