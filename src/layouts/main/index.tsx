import { Box } from "@material-ui/core";
import React from "react";
import NavBar from "../../components/nav";
import TopMenu from "../../components/top-menu";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Box maxWidth="1440px" mx="auto">
      <TopMenu />
      <NavBar />
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
