import styled from "styled-components";

export const Product = styled.div``;
export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  background-color: #fff;
  height: 100vh;
  transform: translateX(${(props) => props.transform}%);
  transition: all 0.4s;
  z-index: 100;
  box-shadow: 10px 0px 15px -5px rgba(0, 0, 0, 0.15),
    -10px 0px 15px -5px rgba(0, 0, 0, 0.15);
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;