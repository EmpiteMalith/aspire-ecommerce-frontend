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
} from "../carttitem/CartItemStyles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = () => {
  return (
    <ItemContainer className="cart-item-container">
      <Item>
        <ImageContainer>
          <RemoveItem>
            <CloseIcon sx={{ fontSize: 14 }} />
          </RemoveItem>
          <Image
            src="https://m.media-amazon.com/images/I/61GJQyjIIhL._AC_UY218_.jpg"
            alt="item"
          />
        </ImageContainer>
        <ItemDetails>
          <ItemName>BINNUNE Wireless Gaming Headset</ItemName>
          <ItemPrice>$ 39.99</ItemPrice>
        </ItemDetails>
        <ItemPriceContainer>
          <QtyInc>
            <AddIcon sx={{ fontSize: 20 }} />
          </QtyInc>
          <ItemQuantity>5</ItemQuantity>
          <QtyDec>
            <RemoveIcon sx={{ fontSize: 20 }} />
          </QtyDec>
        </ItemPriceContainer>
      </Item>
      <Item>
        <ImageContainer>
          <RemoveItem>
            <CloseIcon sx={{ fontSize: 14 }} />
          </RemoveItem>
          <Image
            src="https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UY218_.jpg"
            alt="item"
          />
        </ImageContainer>
        <ItemDetails>
          <ItemName>
            DualShock 4 Wireless Controller for PlayStation 4 - Jet Black
          </ItemName>
          <ItemPrice>$ 58.85</ItemPrice>
        </ItemDetails>
        <ItemPriceContainer>
          <QtyInc>
            <AddIcon sx={{ fontSize: 20 }} />
          </QtyInc>
          <ItemQuantity>15</ItemQuantity>
          <QtyDec>
            <RemoveIcon sx={{ fontSize: 20 }} />
          </QtyDec>
        </ItemPriceContainer>
      </Item>
      <Item>
        <ImageContainer>
          <RemoveItem>
            <CloseIcon sx={{ fontSize: 14 }} />
          </RemoveItem>
          <Image
            src="https://m.media-amazon.com/images/I/81xKdwCO2hL._AC_UL320_.jpg"
            alt="item"
          />
        </ImageContainer>
        <ItemDetails>
          <ItemName>HP Victus 15 Gaming Laptop</ItemName>
          <ItemPrice>$ 688.88</ItemPrice>
        </ItemDetails>
        <ItemPriceContainer>
          <QtyInc>
            <AddIcon sx={{ fontSize: 20 }} />
          </QtyInc>
          <ItemQuantity>4</ItemQuantity>
          <QtyDec>
            <RemoveIcon sx={{ fontSize: 20 }} />
          </QtyDec>
        </ItemPriceContainer>
      </Item>
      <Item>
        <ImageContainer>
          <RemoveItem>
            <CloseIcon sx={{ fontSize: 14 }} />
          </RemoveItem>
          <Image
            src="https://m.media-amazon.com/images/I/61GJQyjIIhL._AC_UY218_.jpg"
            alt="item"
          />
        </ImageContainer>
        <ItemDetails>
          <ItemName>BINNUNE Wireless Gaming Headset</ItemName>
          <ItemPrice>$ 39.99</ItemPrice>
        </ItemDetails>
        <ItemPriceContainer>
          <QtyInc>
            <AddIcon sx={{ fontSize: 20 }} />
          </QtyInc>
          <ItemQuantity>5</ItemQuantity>
          <QtyDec>
            <RemoveIcon sx={{ fontSize: 20 }} />
          </QtyDec>
        </ItemPriceContainer>
      </Item>
      <Item>
        <ImageContainer>
          <RemoveItem>
            <CloseIcon sx={{ fontSize: 14 }} />
          </RemoveItem>
          <Image
            src="https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UY218_.jpg"
            alt="item"
          />
        </ImageContainer>
        <ItemDetails>
          <ItemName>
            DualShock 4 Wireless Controller for PlayStation 4 - Jet Black
          </ItemName>
          <ItemPrice>$ 58.85</ItemPrice>
        </ItemDetails>
        <ItemPriceContainer>
          <QtyInc>
            <AddIcon sx={{ fontSize: 20 }} />
          </QtyInc>
          <ItemQuantity>15</ItemQuantity>
          <QtyDec>
            <RemoveIcon sx={{ fontSize: 20 }} />
          </QtyDec>
        </ItemPriceContainer>
      </Item>
      <Item>
        <ImageContainer>
          <RemoveItem>
            <CloseIcon sx={{ fontSize: 14 }} />
          </RemoveItem>
          <Image
            src="https://m.media-amazon.com/images/I/81xKdwCO2hL._AC_UL320_.jpg"
            alt="item"
          />
        </ImageContainer>
        <ItemDetails>
          <ItemName>HP Victus 15 Gaming Laptop</ItemName>
          <ItemPrice>$ 688.88</ItemPrice>
        </ItemDetails>
        <ItemPriceContainer>
          <QtyInc>
            <AddIcon sx={{ fontSize: 20 }} />
          </QtyInc>
          <ItemQuantity>4</ItemQuantity>
          <QtyDec>
            <RemoveIcon sx={{ fontSize: 20 }} />
          </QtyDec>
        </ItemPriceContainer>
      </Item>
    </ItemContainer>
  );
};

export default CartItem;
