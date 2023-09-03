import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <section id="cart" className="container">
      <h2>CART</h2>
      <button className="cancel" onClick={props.onHideCart}>
        X
      </button>
      <div className="cart-header">
        <span className="cart-item">ITEM</span>
        <span className="cart-price">PRICE</span>
        <span className="cart-quantity">QUANTITY</span>
      </div>
      <div>
        <CartItem></CartItem>
      </div>
      <div className="cart-total">
        <span>
          <span className="total-title"> Total</span>
          <span className="total-value">$0</span>
        </span>
      </div>
      <button className="purchase-btn" type="button">
        PURCHASE
      </button>
    </section>
  );
};

export default Cart;
