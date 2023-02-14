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
import Backdrop from "../backdrop/Backdrop";
import RightSidebar from "../container/RightSidebar";
import { createGlobalStyle } from "styled-components";
import Cart from "../cart/Cart";
import WishList from "../wishlist/WishList";

export const Globalstyle = createGlobalStyle`
  body{
    overflow:${(props) => (props.overflow ? "hidden" : "")}
  }
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [contentType, setContentType] = useState("");

  const openSidebar = () => {
    setSidebar((prevstate) => !prevstate);
    setContentType("cart");
  };

  const openWishList = () => {
    setSidebar((prevstate) => !prevstate);
    setContentType("wishlist");
  };

  const stickyNavbar = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      <Globalstyle overflow={sidebar} />
      <Backdrop rightMenu={sidebar} />
      <RightSidebar
        rightMenu={sidebar}
        closeSidebar={openSidebar}
        name={contentType === "cart" ? "Cart Review" : "Wish List"}
      >
        {switchContent(contentType)}
      </RightSidebar>
      <Container stickyNav={navbar}>
        <Wrapper>
          <Left>
            <Logo>ASPIRE</Logo>
          </Left>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem onClick={openWishList}>
              <FavoriteBorderIcon />
            </MenuItem>
            <MenuItem onClick={openSidebar}>
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
    </>
  );
};

function switchContent(contentType) {
  switch (contentType) {
    case "cart":
      return <Cart />;
    case "wishlist":
      return <WishList />;
    default:
      return null;
  }
}

export default Navbar;
