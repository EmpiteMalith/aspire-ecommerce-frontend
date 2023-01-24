import React from "react";
import { categories } from "../../data/categoryData";
import SingleCategory from "../singlecategory/SingleCategory";
import { Container, Title } from "../categories/CategoriesStyles";

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
