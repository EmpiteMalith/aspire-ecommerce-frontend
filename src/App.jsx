import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesDetails from "./routes/RouteDetails";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Navbar />
        <RoutesDetails />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
