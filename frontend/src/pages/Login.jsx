import React, { useState } from "react";
import { Input, Box, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getUserLoggedIn } from "../redux/authentication/action";
const Login = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    userId: "",
    password: "",
  });

  const handleLogin = () => {
    var payload;
    if (userDetails.userId.includes("@")) {
      payload = { email: userDetails.userId, password: userDetails.password };
    } else {
      payload = { phone: userDetails.userId, password: userDetails.password };
    }



    console.log(document.cookie);

    // You can also access specific cookies if needed
    const jwtToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)jwtToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const refreshToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)refreshToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    console.log("JWT Token:", jwtToken);
    console.log("Refresh Token:", refreshToken);
    dispatch(getUserLoggedIn(payload));
  };
  return (
    <Box>
      <Input
        placeholder="Enter email/phone"
        onChange={(e) =>
          setUserDetails({ ...userDetails, userId: e.target.value })
        }
      />
      <Input
        placeholder="Password"
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
      />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;
