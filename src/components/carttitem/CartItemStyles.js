import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 220px);
  padding: 0 1rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f6f7fb;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  border-radius: 10px;
  height: 125px;
  width: 125px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.5rem;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const ItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemName = styled.h3`
  font-size: 1rem;
  color: #141414;
  font-weight: 500;
`;
export const ItemPrice = styled.div`
  color: #141414;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const QtyBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: #f6f7fb;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 20%;
  &:hover {
    background: #007aff;
    color: #fff;
  }
`;

export const QtyInc = styled(QtyBtn)``;

export const QtyDec = styled(QtyBtn)``;

export const ItemQuantity = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #141414;
  margin: 0 1rem;
  font-weight: 500;
`;

export const RemoveItem = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #f6f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  left: -10px;
  cursor: pointer;
  &:hover {
    background: #ff497c;
    color: #fff;
  }
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1rem;
`;
export const TotalAmount = styled.div`
 display: flex;
`;

export const TotalText = styled.span`
  font-size: 1.2rem;
`;

export const TotalPrice = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CheckoutButton = styled.button`
  font-size: 1rem;
  background: #007aff;
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  border-radius: 1.5rem;
  font-weight: 500;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    opacity: 0.75;
  }
`;
