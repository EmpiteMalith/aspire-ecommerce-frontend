import React from "react";
import { CartContent } from "../cart/CartStyles";
import CartItem from "../carttitem/CartItem";

const Cart = () => {
  return (
    <CartContent>
      <CartItem itemType="cart"/>
    </CartContent>
  );
};

export default Cart;
