import * as types from "./type";
const initialState = {
  loggedInUser: null,
  loading: true,
  error: false,
};

export const authenticationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.loading:
      return { ...state, loading: true };
    case types.error:
      return { ...state, error: payload, loading: false };
    case types.loginSuccess:
      return { ...state, loginSuccess: payload, loading: false };
    default:
      return state;
  }
};
