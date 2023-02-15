import React from "react";
import Categories from "../components/categories/Categories";
import Products from "../components/productlist/Products";
import Services from "../components/services/Services";
import Slider from "../components/slider/Slider";

import styled from "styled-components";

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 4rem 0;
  font-weight: 500;
`;

const Section = styled.div``;

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Section>
        <Title>Featured Products</Title>
        <Products />
      </Section>
      <Services />
    </>
  );
};

export default Home;
