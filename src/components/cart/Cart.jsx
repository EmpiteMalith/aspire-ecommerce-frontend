import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Container, CartHeader, Title, CartBody } from "../cart/CartStyles";
import CartItem from "../carttitem/CartItem";
const Cart = ({ rightMenu, closeSidebar }) => {
  return (
    <Container transform={rightMenu ? 0 : 100}>
      <CartHeader>
        <Title>Cart review</Title>
        <div onClick={closeSidebar}>
          <HighlightOffOutlinedIcon />
        </div>
      </CartHeader>
      <CartBody>
        <CartItem />
      </CartBody>
    </Container>
  );
};

export default Cart;
