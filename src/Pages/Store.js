import React from "react";
import Header from "../Components/Header/Header";
import AvailableProduct from "../Components/Content/AvailableProduct";
import Cart from "../Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "../Components/Store/CartProvider";
import HeaderCartButton from "../Components/Header/HeaderCartButton";

const StorePage = () => {
  const [showCart, setShowCart] = useState(false);
  const cartShowHandler = () => {
    setShowCart(true);
  };
  const cartHideHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <Header />
      <HeaderCartButton onClick={cartShowHandler} />
      <AvailableProduct />
      {showCart && <Cart onClick={cartHideHandler} />}
    </CartProvider>
  );
};

export default StorePage;
