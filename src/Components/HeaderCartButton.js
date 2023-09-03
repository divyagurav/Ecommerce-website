import React, { useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import CartContext from "./cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <React.Fragment>
      <Button
        variant="dark"
        className="border border-3 border-info"
        onClick={props.onClick}
      >
        Cart
        <Badge bg="secondary ms-3">{numberOfCartItems}</Badge>
      </Button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
