import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Container, CartHeader, Title, Product } from "../cart/CartStyles";
const Cart = ({ rightMenu, closeSidebar }) => {
  return (
    <Container transform={rightMenu ? 0 : 100}>
      <CartHeader>
        <Title>Cart review</Title>
        <div onClick={closeSidebar}>
          <HighlightOffOutlinedIcon />
        </div>
      </CartHeader>
      <Product></Product>
    </Container>
  );
};

export default Cart;
