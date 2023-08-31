import React from "react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const Products=({product})=>{

    
  const { addItem,items,totalAmount } = useContext(CartContext);

  const addCartItem = () => {
    const newItem ={...product,amount:parseInt(1),id:Math.random()}
    addItem(newItem)
  };
  console.log(items,totalAmount)
  return(
    <div id="music-content" >
          <div id="album1">
            <h3>{product.title}</h3>
            <div className="image-container">
              <img className="prod-images" src={product.imageUrl} alt="" />
            </div>
            <div className="prod-details">
              <span>
                <span>${product.price}</span>
              </span>
              <button className="shop-item-button" type="button" onClick={addCartItem} >
                ADD TO CART
              </button>
            </div>
          </div>
    </div>
  )
}

export default Products