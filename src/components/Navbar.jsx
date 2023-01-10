import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Badge from "@mui/material/Badge";

const Container = styled.div`
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #ffffff;
`;
const Wrapper = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  margin-left: 25px;
  font-size: 1.75rem;
  font-weight: 600;
  color: #007aff;
  letter-spacing: 0.45rem;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = ({ showCart }) => {
  return (
    <Container>
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
