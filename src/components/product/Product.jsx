import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Container,
  ImageContainer,
  Image,
  Overlay,
  Item,
  AddCart,
  Info,
  Title,
  Price,
} from "../product/ProductStyles";

const Product = ({ productData }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={productData.image} />
        <Overlay>
          <Item>
            <FavoriteBorderOutlinedIcon />
          </Item>
          <AddCart>Add to cart</AddCart>
          <Item>
            <VisibilityOutlinedIcon />
          </Item>
        </Overlay>
      </ImageContainer>
      <Info>
        <Title>{productData.title}</Title>
        <Price>${productData.price}</Price>
      </Info>
    </Container>
  );
};

export default Product;
