import React, { useMemo, useState } from "react";
import { Box, Button, Text, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Amount = ({ cart }) => {
  const { userDetails } = useSelector((store) => store.authenticationReducer);
  const [customerDetails, setCustomerDetails] = useState({
    name: userDetails?.name || "",
    address: userDetails?.address || "",
    mobileNumber: userDetails?.phone || "",
  });
  const totalPrice = useMemo(() => {
    const totalValue =
      cart.length &&
      cart.reduce((acc, ele) => {
        const total = acc + ele.price * ele.quantity;
        return total;
      }, 0);
    return Math.round(totalValue);
  }, [cart]);
  const handlePlaceOrder = () => {
    // Logic to place order using customerDetails
    // Example: dispatch(placeOrderAction(customerDetails));
    // You can dispatch an action to place the order and send customerDetails to the backend
    // Reset customer details after placing the order
    setCustomerDetails({
      name: "",
      address: "",
      mobileNumber: "",
    });
  };

  return (
    <Box maxW={cart?.length > 0 ? "20%" : "0%"} w="full" maxH={"100vh"}>
      <Box
        py="4"
        px="2"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        w="full"
        boxShadow={"xl"}
        height="full"
      >
        <Text alignSelf={"flex-start"} mb="4" fontSize={"xl"}>
          Total price : {totalPrice}
        </Text>
        <Box display="flex" flexDirection={"column"} rowGap={4}>
          <Input
            placeholder="Name"
            value={customerDetails.name}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                name: e.target.value,
              })
            }
          />
          <Input
            placeholder="Address"
            value={customerDetails.address}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                address: e.target.value,
              })
            }
          />
          <Input
            placeholder="Mobile Number"
            value={customerDetails.mobileNumber}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                mobileNumber: e.target.value,
              })
            }
          />
          <Button
            colorScheme={"teal"}
            variant="outline"
            w={"full"}
            maxW={"xs"}
            onClick={handlePlaceOrder}
            disabled={
              !customerDetails.name ||
              !customerDetails.address ||
              !customerDetails.mobileNumber
            }
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Amount);
