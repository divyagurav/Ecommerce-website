import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Product.css";
import { useContext } from "react";
import CartContext from "./cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
    });
  };
  return (
    <Col className="col-6">
      <Card className="card">
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Img
          style={{ width: "90%", margin: "auto" }}
          variant="top"
          src={props.imageUrl}
        />
        <div className="bottom">
          <Card.Text>{`$${props.price}`}</Card.Text>
          <Button onSubmit={submitHandler}>Add To Cart</Button>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
