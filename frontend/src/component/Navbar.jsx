import React from "react";
import { Box, Image } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display="flex"
      width={"100%"}
      px="4"
      bgColor={"#687EFF"}
      py="4"
      justifyContent={"space-between"}
      overflowY="hidden" // Set overflow to hidden to remove vertical scrollbar
    >
      <Link to="/dashboard/products">
        <Box
          width={"20"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src="https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg"
            alt="logo"
            width={"100%"}
          />
        </Box>
      </Link>
      <Box>
        <UserAvatar />
      </Box>
    </Box>
  );
};

export default React.memo(Navbar);
