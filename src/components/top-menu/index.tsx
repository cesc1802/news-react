import { Box, Menu, MenuItem, Typography, Link } from "@material-ui/core";
import React from "react";
import { IMenuOptions, topMenuConfig } from "./types";
import styled from "styled-components";

function renderTopMenuItem(menus: IMenuOptions[]) {
  return menus.map((item) => (
    <Box marginRight="20px">
      <Link href="#">
        <Typography>{item.name}</Typography>
      </Link>
    </Box>
  ));
}

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: #fdf8f1;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eaeaea;
`;

function TopMenu() {
  return (
    <React.Fragment>
      <Container>{renderTopMenuItem(topMenuConfig)}</Container>
    </React.Fragment>
  );
}

export default TopMenu;
