import * as types from "./type"
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

const getCartAction = (payload) => {
  return {
    type: types.getCartProduct,
    payload,
  };
};

export const getCartDataFromApi = () => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart`);
    const data = response?.data;
    dispatch(getCartAction(data));
  } catch (error) {
    console.log(error);
    dispatch(errorAction(error?.response?.data?.message||error?.message));
  }
};
