import React, { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Cart from "./Cart/Cart";
const HeaderCartButton = (props) => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <React.Fragment>
      <Button
        variant="dark"
        className="border border-3 border-info"
        onClick={showCartHandler}
      >
        Cart
        <Badge bg="secondary ms-3">0</Badge>
      </Button>
      {showCart && <Cart onHideCart={hideCartHandler}></Cart>}
    </React.Fragment>
  );
};

export default HeaderCartButton;
