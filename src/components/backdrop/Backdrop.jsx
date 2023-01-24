import React from "react";
import { Container } from "../backdrop/BackdropStyles";

const Backdrop = ({ rightMenu }) => {
  return <Container backdrop={rightMenu ? "show" : "none"}></Container>;
};

export default Backdrop;
