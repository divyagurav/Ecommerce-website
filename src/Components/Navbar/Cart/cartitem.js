import "./cartitem.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const addCartItem = () => {
    // const newItem ={...product,amount:parseInt(1),id:Math.random()}
    // addItem(newItem)
  };

  const removeCartItem = () => {
    removeItem(item);
  };

  console.log(item);
  return (
    <div key={item.id}>
      <div className="cart-items">
        <div className="cart-item-name">
          <img src={item.imageUrl} alt=""></img>
          <span className="title">{item.title}</span>
        </div>
        <div className="cart-items-price">{item.price}</div>
        <div className="cart-items-quantity">
          <input type="number" value="1"></input>
          <button onClick={removeCartItem}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
