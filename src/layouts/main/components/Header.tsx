import React from "react";
import MenuBar from "../../../components/menu-bar";
import TopMenu from "../../../components/top-menu";

const Header: React.FC = () => {
  return (
    <header>
      <TopMenu />
      <MenuBar />
    </header>
  );
};

export default Header;
