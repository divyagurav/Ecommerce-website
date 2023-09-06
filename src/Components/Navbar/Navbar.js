import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar } from "./const";
import Cart from "./Cart/cart";
import CartContext from "../Store/CartContext";
const Header = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [showCart, setShowCart] = useState(false);

  const cartShowHandler = () => {
    setShowCart((preShowcart) => !showCart);
  };
  return (
    <div className="navbar">
      <header className="header">
        {Navbar.map((Element) => (
          <div className="links">
            <Link to={Element.path} key={Element.name}>
              {" "}
              {Element.name}{" "}
            </Link>
          </div>
        ))}

        <a href="#cart" className="cart-holder" onClick={cartShowHandler}>
          cart<span className="cart-number">{numberOfCartItems}</span>
        </a>
        {showCart && <Cart onCartShow={cartShowHandler}></Cart>}
      </header>
      <h1>The Generics</h1>
    </div>
  );
};

export default Header;
