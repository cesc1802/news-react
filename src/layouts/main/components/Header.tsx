import React from "react";
import MenuBar from "../../../components/MenuBar";
import TopMenu from "../../../components/TopMenu";

const Header: React.FC = () => {
  return (
    <header>
      <TopMenu />
      <MenuBar />
    </header>
  );
};

export default Header;
