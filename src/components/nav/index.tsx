import React from "react";
import styled from "styled-components";
import { Box, Menu, MenuItem, Button, Typography } from "@material-ui/core";

const Container = styled(Box)`
  display: flex;
  align-item: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const ItemLeft = styled(Box)`
  flex: 30%;
`;

const ItemRight = styled(Box)`
  flex: 60%;
`;

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function renderLogo() {
    return (
      <Box display="flex" alignItems="center">
        <Box mr="16px">
          <img src="https://www.tonggiaophanhanoi.org/wp-content/uploads/2020/12/logo_150-80x85.png"></img>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Giáo Xứ Hà Hồi</Typography>
          <Typography>Hà Hồi Parish</Typography>
        </Box>
      </Box>
    );
  }

  function renderNav() {}

  return (
    <Container>
      <ItemLeft>{renderLogo()}</ItemLeft>

      <ItemRight>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          TPG Hà Nội
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button
          aria-owns={anchorEl ? "simple-menu1" : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
        >
          THỜI SỰ
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
        >
          THỜI SỰ
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          SỐNG ĐẠO ƠN GỌI
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
        >
          PHỤNG VỤ
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
        >
          GIÁO LÝ
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
        >
          TƯ LIỆU
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
        >
          MEDIA
        </Button>
      </ItemRight>
    </Container>
  );
}

export default NavBar;
