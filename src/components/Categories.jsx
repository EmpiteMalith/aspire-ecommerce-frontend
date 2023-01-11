import React from "react";
import styled from "styled-components";
import { categories } from "../data/categoryData";
import SingleCategory from "./SingleCategory";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.2rem 7rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 4rem 0;
  font-weight: 500;
`;

const Categories = () => {
  return (
    <>
      <Title>Top Categories</Title>
      <Container>
        {categories.map((item) => (
          <SingleCategory categoryDetails={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
