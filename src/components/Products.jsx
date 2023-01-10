import React from "react";
import styled from "styled-components";
import { ProductsData } from "../data/productsData";
import Product from "./Product";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  grid-gap:15px;
  justify-content:center;
  padding:1rem 5rem;
`;

const Products = () => {
  return (
    <Container>
      {ProductsData.map((item) => (
        <Product productData={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
