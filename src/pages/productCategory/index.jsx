import React from "react";
import {
  Container,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option
} from "./ProductCategoryStyles";
import Products from "../../components/productlist/Products";

const ProductCategory = () => {
  return (
    <Container>
      <FilterContainer>
        <Filter>
           <FilterText>Brand</FilterText>
           <Select>
            <Option disabled selected>Select brand</Option>
            <Option>Beats</Option>
            <Option>JBL</Option>
            <Option>Sony</Option>
           </Select>
        </Filter>
        <Filter>
           <FilterText>Sort Items</FilterText>
           <Select>
            <Option selected>latest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
           </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductCategory;
