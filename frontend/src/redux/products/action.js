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

const getProductAction = (payload) => {
  return {
    type: types.getProduct,
    payload,
  };
};

export const getProductDataFromApi = () => async (dispatch) => {
  dispatch(loadingAction());
  try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/product`);
    const data = response.data
    dispatch(getProductAction(data));
  } catch (error) {
    dispatch(errorAction(error?.response?.data?.message || error?.message));
  }
};
