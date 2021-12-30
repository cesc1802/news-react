import { Box } from "@material-ui/core";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Box maxWidth="1440px" mx="auto">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
