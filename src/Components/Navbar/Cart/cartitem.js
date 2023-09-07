import "./cartitem.css";
import { useContext, useRef } from "react";
import CartContext from "../../Store/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const qty = useRef();

  const removeCartItem = () => {
    removeItem(item);
  };

  return (
    <div key={item.id}>
      <div className="cart-items">
        <div className="cart-item-name">
          <img src={item.imageUrl} alt=""></img>
          <span className="title">{item.title}</span>
        </div>
        <div className="cart-items-price">{item.price}</div>
        <div className="cart-items-quantity">
          <input
            type="number"
            ref={qty}
            defaultValue={item.amount > 1 ? item.amount : "1"}
          ></input>
          <button onClick={removeCartItem}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
