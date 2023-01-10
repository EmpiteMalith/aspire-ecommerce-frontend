import React from "react";
import styled from "styled-components";
import Delivery from "../assets/images/icons8-delivery-box-60.png";
import Phone from "../assets/images/icons8-phone-64.png";
import DeliveryReturn from "../assets/images/icons8-return-purchase-80.png";
import Money from "../assets/images/icons8-banknotes-80.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  margin: 5rem 0;
  background: #e8e8e8;
  padding: 4rem 0;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 20px;
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Box = styled.div`
  margin-left: 1rem;
`;
const Image = styled.img``;
const Title = styled.h3`
  font-weight: 500;
  color: #292930;
  margin-top: 1rem;
`;
const Desc = styled.p`
  font-weight: 400;
  color: #777777;
  margin-top: 0.4rem;
`;
const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #292930;
  text-align:center;
  margin-bottom:2.5rem;
`;
const ContainerInner = styled.div`
  display: flex;
  justify-content: center;
`;

const Services = () => {
  return (
    <Container>
      <Heading>Why shop with us?</Heading>
      <ContainerInner>
        <Item>
          <Image src={Delivery} />
          <Box>
            <Title>Fast & Secure Delivery</Title>
            <Desc>Tell about your service.</Desc>
          </Box>
        </Item>
        <Item>
          <Image src={Money} />
          <Box>
            <Title>Money Back Guarantee</Title>
            <Desc>Within 10 days.</Desc>
          </Box>
        </Item>
        <Item>
          <Image src={DeliveryReturn} />
          <Box>
            <Title>24 Hour Return Policy</Title>
            <Desc>No question ask.</Desc>
          </Box>
        </Item>
        <Item>
          <Image src={Phone} />
          <Box>
            <Title>Pro Quality Support</Title>
            <Desc>24/7 Live support.</Desc>
          </Box>
        </Item>
      </ContainerInner>
    </Container>
  );
};

export default Services;
