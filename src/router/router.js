import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import Home from "../home/home";
import Login from "../login/login";
import Footer from "../components/footer/footer";
import SignUp from "../components/sign up/sign up";
import Wishlist from "../components/wishlist/wishlist";
import Cart from "../components/cart/cart";
import Checkout from "../components/checkout/checkout";
import Account from "../components/Account/account";
import Contact from "../components/contact/contact";
import Error from "../components/error/error";
import About from "../components/about/about";

export default function MainRoutes() {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
