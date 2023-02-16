import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/productDetails";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProductCategory from "../pages/productCategory";

const RouteDetails = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/productCategory" element={<ProductCategory/>} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default RouteDetails;
