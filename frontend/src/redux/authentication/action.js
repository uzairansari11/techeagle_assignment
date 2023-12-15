import * as types from "./type";
import axios from "axios";

const loadingAction = () => {
  return {
    type: types.loading,
  };
};

const errorAction = (payload) => {
  return {
    type: types.error,
    payload,
  };
};

const loginAction = (payload) => {
  return {
    type: types.loginSuccess,
    payload,
  };
};

export const getUserLoggedIn = (payload) => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/login`,
      payload
    );
    console.log(response);
  } catch (error) {
    dispatch(errorAction(error?.response?.data?.message || error?.message));
  }
};
