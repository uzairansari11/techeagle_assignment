import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const MenuOptions = ({ children }) => {
  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} rightIcon={<ChevronDownIcon />}>
              {children}
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

export default MenuOptions;
