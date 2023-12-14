import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Box, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import NotFound from "./NotFound";
import {getProductDataFromApi} from "../redux/products/action"
const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.productReducer);
   useEffect(() => {
     dispatch(getProductDataFromApi());
   }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : data?.length > 0 ? (
        <Box
          overflowY={"auto"} 
          maxH={"calc(100vh - 100px)"}
          paddingBottom={"20px"}
        >
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {data.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </Grid>
        </Box>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default React.memo(Products);
