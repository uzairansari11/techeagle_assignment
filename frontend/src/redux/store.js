import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./carts/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

export const store = createStore(rootReducer, enhancer(applyMiddleware(thunk)));
