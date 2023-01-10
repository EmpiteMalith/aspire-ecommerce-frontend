import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: ${(props) => props.backdrop};
  z-index: 2;
`;

const Backdrop = ({ rightMenu }) => {
  return <Container backdrop={rightMenu ? "show" : "none"}></Container>;
};

export default Backdrop;
