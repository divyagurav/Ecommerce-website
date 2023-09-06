import React from "react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../Routers/Const";

const Products = ({ product }) => {
  const { addItem, items, totalAmount, selectedItemHandler } =
    useContext(CartContext);
  const navagete = useNavigate();

  const productClickHandler = () => {
    selectedItemHandler(product);
    navagete(RoutePath.ProductPage);
  };

  const addCartItem = () => {
    const newItem = { ...product, amount: parseInt(1), id: Math.random() };
    addItem(newItem);
  };
  console.log(items, totalAmount);
  return (
    <div id="music-content">
      <div id="album1" onClick={productClickHandler}>
        <h3>{product.title}</h3>
        <div className="image-container">
          <img className="prod-images" src={product.imageUrl} alt="" />
        </div>
        <div className="prod-details">
          <span>
            <span>${product.price}</span>
          </span>
          <button
            className="shop-item-button"
            type="button"
            onClick={addCartItem}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
