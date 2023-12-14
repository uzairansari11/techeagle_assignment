import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import Sidebar from "../component/Sidebar";
const Dashboard = () => {
  
  return (
    <Flex height={"100vh"}>
      <Box w="20%" height={"100vh"} borderRight="2px solid grey">
        <Sidebar />
      </Box>
      <Spacer />
      <Box w="80%" height={"100vh"} borderLeft={"2px solid grey"}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Dashboard;
