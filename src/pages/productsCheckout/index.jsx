import React from "react";
import CartItem from "../../components/carttitem/CartItem";
import {
  Container,
  LeftSide,
  RightSide,
  FormContainer,
  CheckoutForm,
  Title,
  CheckoutDetails,
  Details,
  SummaryTitle,
  SummaryPrice,
  TotalPrice,
  TotalPriceTitle,
  CheckoutButton,
} from "../productsCheckout/CheckoutStyles";

const CheckoutPage = () => {
  return (
    <Container>
      <LeftSide>
        <CartItem pageType="checkout" />
      </LeftSide>
      <RightSide>
        <FormContainer>
          <Title>Your Order</Title>
          <CheckoutForm>
            <CheckoutDetails>
              <Details>
                <SummaryTitle>Subtotal</SummaryTitle>
                <SummaryPrice>$286.00</SummaryPrice>
              </Details>
              <Details>
                <SummaryTitle>Shipping</SummaryTitle>
                <SummaryPrice>Free Shipping</SummaryPrice>
              </Details>
              <Details>
                <SummaryTitle>Estimated taxes</SummaryTitle>
                <SummaryPrice>$28.00</SummaryPrice>
              </Details>
              <TotalPrice>
                <TotalPriceTitle>Total</TotalPriceTitle>
                <SummaryPrice>$328.00</SummaryPrice>
              </TotalPrice>
            </CheckoutDetails>
          </CheckoutForm>
          <CheckoutButton type="button">Proceed to checkout</CheckoutButton>
        </FormContainer>
      </RightSide>
    </Container>
  );
};

export default CheckoutPage;
