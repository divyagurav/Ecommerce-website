import React from "react";
import "./productlist.css";

import Products from "./product";

const Productlist = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <div key={index}>
            <Products product={product} ></Products>
          </div>
        ))}
        </div>
      </div>
  );
};

export default Productlist;

;