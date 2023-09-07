import React from "react";

const CartContext = React.createContext({
  items: [],
  fetchData: () => {},
  addItems: (item) => {},
  selectedItem: [],
  selectedItemHandler: (item) => {},
  removeItems: (item) => {},
  totalAmount: 0,
});

export default CartContext;
