import React from "react";
import styled from "styled-components";
import {
  Box,
  Menu,
  MenuItem,
  Button,
  Typography,
  Popover,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Container = styled(Box)`
  display: flex;
  align-item: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const NavBarLeft = styled(Box)`
  flex: 30%;
`;

const NavBarRight = styled(Box)`
  display: flex;
  flex: 80%;
  font-weight: bold;
`;

const LogoText = styled(Typography)`
  color: red;
`;

const BoxBorder = styled(Box)`
  border-bottom: 2px solid #dd9933;
`;

const KeyboardArrowDownIconBlue = styled(KeyboardArrowDownIcon)`
  color: #1e73be;
`;

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    console.log("handle close");
    setAnchorEl(null);
  }

  function renderLogo() {
    return (
      <Box display="flex" alignItems="center">
        <Box mr="16px" width={"100px"} height={"80px"}>
          <img src="https://www.tonggiaophanhanoi.org/wp-content/uploads/2020/12/logo_150-80x85.png"></img>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <LogoText variant="h1">Giáo Xứ Hà Hồi</LogoText>
          <Typography variant="h1" color="primary">
            Hà Hồi Parish
          </Typography>
        </Box>
      </Box>
    );
  }

  function renderNav() {}

  return (
    <React.Fragment>
      <Container>
        <NavBarLeft>{renderLogo()}</NavBarLeft>
        <NavBarRight>
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">TPG Hà Nội</Typography>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: -85, horizontal: "center" }}
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
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">THỜI SỰ</Typography>
          </Button>
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
          >
            <Typography color="primary">THỜI SỰ</Typography>
          </Button>
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">SỐNG ĐẠO</Typography>
          </Button>
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">PHỤNG VỤ</Typography>
          </Button>

          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">ƠN GỌI</Typography>
          </Button>

          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">GIÁO LÝ</Typography>
          </Button>
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">TƯ LIỆU</Typography>
          </Button>
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
            endIcon={<KeyboardArrowDownIconBlue />}
          >
            <Typography color="primary">MEDIA</Typography>
          </Button>
        </NavBarRight>
      </Container>
      <BoxBorder width={"auto"} height={"30px"} bgcolor={"#1e73be"}></BoxBorder>
    </React.Fragment>
  );
}

export default NavBar;
