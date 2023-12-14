import * as types from "./type";
const initialState = {
  loading: true,
  data: [],
  error: false,
};

export const productReducer = (state = initialState, action) => {
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
    case types.getProduct:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return state;
  }
};
