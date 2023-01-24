import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Badge from "@mui/material/Badge";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
} from "../navbar/NavbarStyles";

const Navbar = ({ showCart }) => {
  const [navbar, setNavbar] = useState(false);

  const stickyNavbar = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", stickyNavbar);

  return (
    <Container stickyNav={navbar}>
      <Wrapper>
        <Left>
          <Logo>ASPIRE</Logo>
        </Left>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <FavoriteBorderIcon />
          </MenuItem>
          <MenuItem onClick={showCart}>
            <Badge badgeContent={3} color="info">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
          <MenuItem>
            <AccountCircleOutlinedIcon />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
