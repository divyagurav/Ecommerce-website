import React, { useState } from "react";
import "./App.css";
import AvailableProduct from "./Components/AvailableProduct";
import Cart from "./Components/Cart";
import CartProvider from "./Components/CartProvider";
import Header from "./Components/Header";

function App() {
  const [showCart, setShowCart] = useState(false);
  const cartShowHandler = () => {
    setShowCart(true);
  };

  const cartHideHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <Header onShow={cartShowHandler}></Header>
      <AvailableProduct />
      {showCart && <Cart onHideCart={cartHideHandler}></Cart>}
    </CartProvider>
  );
}

export default App;
