import styled from "styled-components";

export const FooterDiv = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 5rem;
  background: #292930;
`;

export const Box = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-weight: 500;
  color: #ffffff;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #cfcfcf;
`;
export const Icon = styled.span`
  margin-right: 0.5rem;
`;
export const SocialContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const SocialIcon = styled.div`
  margin-right: 15px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
`;

export const Newsletter = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const NewsInput = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 0.5rem;
  border: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #cfcfcf;
`;

export const NewsLetterButton = styled.button`
  height: 35px;
  background-color: #ffffff;
  color: #292930;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  padding: 0 10px;
  cursor: pointer;
  border: none;
  margin-left: 0.5rem;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const NewsTitle = styled.span`
  font-weight: 400;
  color: #cfcfcf;
`;
