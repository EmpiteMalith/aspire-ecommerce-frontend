import styled from "styled-components";

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 580px;
  background-color: #fff;
  height: 100vh;
  transform: translateX(${(props) => props.transform}%);
  transition: all 0.4s;
  z-index: 200;
  box-shadow: 10px 0px 15px -5px rgba(0, 0, 0, 0.15),
    -10px 0px 15px -5px rgba(0, 0, 0, 0.15);
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem 1rem 2.5rem;
  border-bottom: 2px solid #f6f7fb;
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CloseBtutton = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #f6f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #ff497c;
    color: #fff;
  }
`