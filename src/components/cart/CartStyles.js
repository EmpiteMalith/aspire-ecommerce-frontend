import styled from "styled-components";

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartBottom = styled.div`
 display: flex;
 justify-content: space-between;
 width:100%;
 align-items: center;
 margin-top: 1.5rem;

`
export const TotalAmount = styled.div`
`

export const TotalText = styled.span`
 font-size: 1.2rem;
`

export const TotalPrice = styled.span`
 margin-left: 0.5rem;
 font-size: 1.5rem;
 font-weight: 600;
`

export const CheckoutButton = styled.button`
 font-size: 1rem;
 background:#007aff;
 color: #fff;
 border: none;
 padding: 0.7rem 1.2rem;
 cursor: pointer;
 border-radius: 1.5rem;
 font-weight: 500;
`
