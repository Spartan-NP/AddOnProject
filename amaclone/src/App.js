import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import Login from "./component/login";
import Home from "./component/Home";
import BuyOrder from "./component/BuyOrder";
import SearchPage from "./component/SearchPage";
import AddToCart from "./component/AddToCart";
import OrderList from "./component/OrderList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList/:id" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<BuyOrder />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/orderlist" element={<OrderList />} />
      </Routes>
    </>
  );
}

export default App;
