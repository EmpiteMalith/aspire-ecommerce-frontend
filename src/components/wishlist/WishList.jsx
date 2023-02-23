import React from "react";
import { CartContent } from "../cart/CartStyles";
import CartItem from "../carttitem/CartItem";

const WishList = () => {
  return (
    <CartContent>
      <CartItem itemType="wishlist" />
    </CartContent>
  );
};

export default WishList;
