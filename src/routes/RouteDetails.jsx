import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/productDetails";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProductCategory from "../pages/productCategory";
import CheckoutPage from "../pages/productsCheckout";

const RouteDetails = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/productCategory" element={<ProductCategory/>} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<CheckoutPage/>} />
    </Routes>
  );
};

export default RouteDetails;
