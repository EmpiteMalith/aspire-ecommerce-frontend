import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesDetails from "./routes/RouteDetails";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Backdrop from "./components/backdrop/Backdrop";
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
