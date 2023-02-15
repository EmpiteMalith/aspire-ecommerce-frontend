import React from "react";
import { CartContent, CartBottom, TotalAmount, TotalText, TotalPrice, CheckoutButton } from "../cart/CartStyles";
import CartItem from "../carttitem/CartItem";

const Cart = () => {
  return (
    <CartContent>
      <CartItem />
      <CartBottom>
        <TotalAmount>
          <TotalText>Total</TotalText>
          <TotalPrice>$567</TotalPrice>
        </TotalAmount>
        <CheckoutButton>Checkout</CheckoutButton>
      </CartBottom>
    </CartContent>
  );
};

export default Cart;
