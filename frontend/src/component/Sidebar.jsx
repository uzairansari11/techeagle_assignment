import React from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { navLinks } from "../constant/constant";
const activeStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  border: "none",
  padding: "0.5rem 1rem",
  marginTop: "1rem",
  borderRadius: "0.5rem",
  textAlign: "center",
  color: "white",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 10px 20px -10px, rgba(0, 0, 0, 0.05) 0px 4px 6px -3px",
  transition: "box-shadow 0.3s ease-in-out",
  backgroundColor: "#687EFF",
};

const inactiveStyle = {
  ...activeStyle,
  color: "black",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 5px 10px -5px, rgba(0, 0, 0, 0.02) 0px 2px 4px -1px",
  backgroundColor: "#d9614e",
  fontWeight: "normal",
};



const Sidebar = () => {
  return (
    <Flex
      direction={"column"}
      rowGap={4}
      px={4}
      overflowY={"auto"} // Use overflowY to enable vertical scrolling
      maxH={"calc(100vh - 100px)"}
      paddingBottom={"20px"}
    >
      {navLinks.map((link, index) => (
        <NavLink
          to={link.to}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          key={link.id}
        >
          {link.label}
        </NavLink>
      ))}
    </Flex>
  );
};

export default Sidebar;
