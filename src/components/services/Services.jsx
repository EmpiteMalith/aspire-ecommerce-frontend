import React from "react";
import Delivery from "../../assets/images/icons8-delivery-box-60.png";
import Phone from "../../assets/images/icons8-phone-64.png";
import DeliveryReturn from "../../assets/images/icons8-return-purchase-80.png";
import Money from "../../assets/images/icons8-banknotes-80.png";
import {
  Container,
  Heading,
  ContainerInner,
  Item,
  Image,
  Box,
  Title,
  Desc,
} from "../services/ServicesStyles";

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
