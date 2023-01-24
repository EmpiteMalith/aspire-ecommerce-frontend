import React from "react";
import { Info, Container, Image, Button, Title } from "./SingleCategoryStyles";

const SingleCategory = ({ categoryDetails }) => {
  return (
    <Container>
      <Image src={categoryDetails.image} />
      <Info>
        <Title>{categoryDetails.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default SingleCategory;
