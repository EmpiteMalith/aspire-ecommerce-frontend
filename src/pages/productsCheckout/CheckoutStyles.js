import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 6rem 8rem;
`;

export const LeftSide = styled.div`
  flex: 2;
  padding: 0 3rem;
`;

export const RightSide = styled.div`
  flex: 1;
`;

export const FormContainer = styled.div`
  background: #daeaea;
  border-radius: 0.4rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1.5rem;
`;

export const CheckoutForm = styled.form`
  padding: 1rem;
  background: #fff;
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const CheckoutDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
`;

export const SummaryTitle = styled.h5`
  font-size: 1rem;
  font-weight: 400;
`;

export const SummaryPrice = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;

export const TotalPrice = styled(Details)`
  border-bottom: 0;
  margin-top: 1.25rem;
`;

export const TotalPriceTitle = styled(SummaryTitle)`
  font-weight: 600;
  font-size: 1.15rem;
`;

export const CheckoutButton = styled.button`
  font-size: 1rem;
  background: #007aff;
  color: #fff;
  border: none;
  height: 45px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  font-family: "Ubuntu", sans-serif;
  margin-top: 2rem;
  margin-bottom: 0.85rem;
`;
