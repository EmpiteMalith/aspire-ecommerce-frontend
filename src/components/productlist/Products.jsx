import React from "react";
import { ProductsData } from "../../data/productsData";
import Product from "../product/Product";
import { Container } from "../productlist/ProductListStyles";

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
