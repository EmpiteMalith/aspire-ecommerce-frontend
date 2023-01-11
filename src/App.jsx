import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesDetails from "./routes/RouteDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Backdrop from "./components/Backdrop";
import "./index.css";
import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`　
  body{
    overflow:${(props) => (props.overflow ? "hidden" : "")}
  }
`;

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar((prevstate) => !prevstate);
  };

  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Globalstyle overflow={sidebar} />
        <Navbar showCart={openSidebar} />
        <Cart rightMenu={sidebar} closeSidebar={openSidebar} />
        <Backdrop rightMenu={sidebar} />
        <RoutesDetails />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
