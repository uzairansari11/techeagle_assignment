import * as types from "./type"
const initialState = {
  loading: true,
  cart: [],
  error: false,
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.loading:
      return {
        ...state,
        loading: true,
      };
    case types.error:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.getCartProduct:
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    default:
      return state;
  }
};
