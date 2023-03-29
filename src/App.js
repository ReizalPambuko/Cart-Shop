import React from "react";
import "./App.css";
//Back
import data from "./component/back/data/Data";
import Header from "./component/front/header/Header";
import { BrowserRouter, Routes, Route, useSubmit } from "react-router-dom";
import Products from "./component/front/products/Products";
import SignUp from "./component/front/signUp/SignUp";
import Cart from "./component/front/cart/Cart";
import { CartProvider } from "react-use-cart";

const App = () => {
  const { productItem } = data;
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Products productItem={productItem} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
