import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar} from "./const";
import Cart from "./Cart/cart";

const Header = () => {
  const [showCart, setShowCart]= useState(false)

  const cartShowHandler = ()=>{
    setShowCart(preShowcart => !showCart )
  }
  return (
    <div className="navbar">
      <header className="header">
          {Navbar.map((Element) => (
            <div className="links">
              <Link  to={Element.path}> {Element.name} </Link>
            </div>
          ))}
        <a href="#cart" className="cart-holder" onClick={cartShowHandler}>cart<span className="cart-number">0</span></a>
        {showCart && <Cart onCartShow ={cartShowHandler}></Cart>}
      </header>
      <h1>The Generics</h1>
    </div>
  );
};

export default Header;