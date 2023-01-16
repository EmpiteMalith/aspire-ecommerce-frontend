import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: translateY(-25%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Container = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex: 1;
  margin: 5px;
  height: 280px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  &:hover ${Info} {
    opacity: 1;
    transition: all 0.7s ease;
    transform: translateY(0%);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #007aff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 400;
  color: #007aff;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    background: #007aff;
    color: #fff;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.4rem;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;