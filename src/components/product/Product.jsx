import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Container = styled.div`
  margin: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  opacity: 0;
  z-index: 1;
  transition: all 0.5s ease;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;
`;

const Info = styled.div`
  margin-top: 1rem;
`;
const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #777777;
  font-size: 1rem;
  line-height: 25px;
`;
const Price = styled.p`
  font-weight: 500;
  color: #292930;
  font-size: 1.15rem;
`;
const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 1;
    z-index: 3;
  }
`;

const AddCart = styled.button`
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  background: #007aff;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Item = styled.div`
  display: flex;
  background: #fff;
  padding: 3px 10px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

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
