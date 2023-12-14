import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartDataFromApi } from "../redux/carts/action";
export const Carts = () => {
  const { loading, error, cart } = useSelector((store) => store.cartReducer)
  console.log(loading,error,cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartDataFromApi());
  }, [dispatch]);
  return <div>Carts</div>;
};
