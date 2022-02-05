import React from "react";
import { StyledSideBar, SidebarList, SidebarItem } from "./sidebar.styles";
import { FiSettings, FiShoppingCart } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";

const Sidebar = ({ view, setView }) => {
  return (
    <StyledSideBar>
      <SidebarList>
        <SidebarItem to="settings">
          <FiSettings />
          <span>Settings</span>
        </SidebarItem>

        <SidebarItem to="favorites">
          <MdFavorite />
          <span>My favorites</span>
        </SidebarItem>

        <SidebarItem to="orders">
          <FiShoppingCart />
          <span>My orders</span>
        </SidebarItem>
      </SidebarList>
    </StyledSideBar>
  );
};

export default Sidebar;
