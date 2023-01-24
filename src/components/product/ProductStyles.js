import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  opacity: 0;
  z-index: 1;
  transition: all 0.5s ease;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;
`;

export const Info = styled.div`
  margin-top: 1rem;
`;
export const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #777777;
  font-size: 1rem;
  line-height: 25px;
`;
export const Price = styled.p`
  font-weight: 500;
  color: #292930;
  font-size: 1.15rem;
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 1;
    z-index: 3;
  }
`;

export const AddCart = styled.button`
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  background: #007aff;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Item = styled.div`
  display: flex;
  background: #fff;
  padding: 3px 10px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;