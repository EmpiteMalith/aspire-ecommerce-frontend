import React from 'react'
import { Routes , Route} from "react-router-dom"
import Home from "../pages/Home"
import ProductList from "../pages/ProductList"
import Products from "../pages/Products"

const RouteDetails = () => {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/products"  element={<Products/>}/>
        <Route path="/productList/:id"  element={<ProductList/>}/>
    </Routes>
  )
}

export default RouteDetails