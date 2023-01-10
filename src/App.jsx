import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesDetails from "./routes/RouteDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Backdrop from "./components/Backdrop";
import "./index.css";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar((prevstate) => !prevstate);
  };

  return (
    <BrowserRouter>
      <div className="main-wrapper">
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
