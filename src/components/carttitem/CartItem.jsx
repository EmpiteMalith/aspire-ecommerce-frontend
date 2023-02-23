import React from "react";
import {
  Item,
  Image,
  ItemDetails,
  ItemPriceContainer,
  ItemName,
  ItemPrice,
  QtyInc,
  QtyDec,
  ImageContainer,
  ItemQuantity,
  ItemContainer,
  RemoveItem,
  Container,
  CartBottom,
  TotalAmount,
  TotalText,
  TotalPrice,
  CheckoutButton,
  AddCartButton,
  WishlistContent,
  InStock,
  OutStock,
} from "../carttitem/CartItemStyles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { ProductsData } from "../../data/productsData";

const CartItem = (props) => {
  return (
    <Container>
      <ItemContainer className="cart-item-container" containerType={props.itemType}>
        {ProductsData.map((item) => (
          <Item key={item.id}>
            <ImageContainer>
              <RemoveItem>
                <CloseIcon sx={{ fontSize: 14 }} />
              </RemoveItem>
              <Image src={item.image} alt="item" />
            </ImageContainer>
            <ItemDetails>
              <ItemName>{item.title}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemDetails>
            {props.itemType === "cart" ? (
              <ItemPriceContainer>
                <QtyInc>
                  <AddIcon sx={{ fontSize: 20 }} />
                </QtyInc>
                <ItemQuantity>5</ItemQuantity>
                <QtyDec>
                  <RemoveIcon sx={{ fontSize: 20 }} />
                </QtyDec>
              </ItemPriceContainer>
            ) : (
              <>
                <WishlistContent>
                  <AddCartButton itemQty={item.qty}>Add to Cart</AddCartButton>
                  {item.qty === 0 ? (
                    <OutStock>Out of Stock</OutStock>
                  ) : (
                    <InStock>In Stock</InStock>
                  )}
                </WishlistContent>
              </>
            )}
          </Item>
        ))}
      </ItemContainer>
      {props.itemType === "cart" ? (
        <CartBottom>
          <TotalAmount>
            <TotalText>Total</TotalText>
            <TotalPrice>$567</TotalPrice>
          </TotalAmount>
          <CheckoutButton>Checkout</CheckoutButton>
        </CartBottom>
      ) : null}
    </Container>
  );
};

export default CartItem;
