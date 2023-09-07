import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
  items: [],
  selectedItem: [],
  totalAmount: 0,
};

// const reducer = (state, action) => {
//   let updateItems;
//   if (action.type === "ADD") {
//     console.log(action);
//     const updatedTotalAmount = state.totalAmount + parseInt(action.value.price);
//     // parseInt(action.value.amount)

//     const itemExistidx = state.items.findIndex(
//       (val) => val.id === action.value.id
//     );

//     const itemExist = state.items[itemExistidx];

//     if (itemExist) {
//       let updateItem = {
//         ...itemExist,
//         amount: parseInt(itemExist.amount) + parseInt(action.value.amount),
//       };
//       updateItems = [...state.items];
//       updateItems[itemExistidx] = updateItem;
//     } else {
//       updateItems = state.items.concat(action.value);
//       // [...state.items, action.value]
//     }
//     return {
//       items: updateItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }

//   if (action.type === "REMOVE") {
//     const updatedTotalAmount = state.totalAmount - action.value.price;

//     console.log(action.value, state.totalAmount);
//     if (action.value.amount > 1) {
//       const itemindex = state.items.findIndex(
//         (val) => val.id === action.value.id
//       );

//       console.log(itemindex);
//       const itemRemove = state.items[itemindex];
//       let updateItem = {
//         ...itemRemove,
//         amount: parseInt(itemRemove.amount) - 1,
//       };
//       updateItems = [...state.items];
//       updateItems[itemindex] = updateItem;
//       console.log(updateItems);
//     } else {
//       updateItems = state.items.filter((val) => val.id !== action.value.id);
//       console.log(updateItems);
//     }

//     return {
//       items: updateItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
// };

// const CartProvider = (props) => {
//   const [cartState, dispatchItems] = useReducer(reducer, initialState);

//   const addItemsHandler = (item) => {
//     dispatchItems({ type: "ADD", value: item });
//   };
//   const removeItemsHandler = (item) => {
//     dispatchItems({ type: "REMOVE", value: item });
//   };

//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemsHandler,
//     removeItem: removeItemsHandler,
//   };

const reducer = (state, action) => {
  let updateItems;
  if (action.type === "ADD") {
    const itemExistidx = state.items.findIndex(
      (val) => val.id === action.value.id
    );
    const itemExist = state.items[itemExistidx];

    if (itemExist) {
      let updateItem = {
        ...itemExist,
        amount: parseInt(action.value.amount),
      };
      updateItems = [...state.items];
      updateItems[itemExistidx] = updateItem;
    } else {
      updateItems = [...state.items, action.value];
    }
    state.totalAmount = updateItems.reduce(
      (tamount, item) => tamount + item.price * item.amount,
      0
    );
  }

  if (action.type === "REMOVE") {
    updateItems = state.items.filter((val) => val.id !== action.value.id);
    state.totalAmount = updateItems.reduce(
      (tamount, item) => tamount + item.price * item.amount,
      0
    );
  }

  if (action.type === "SET_ITEMS") {
    updateItems = action.value;
    state.totalAmount = updateItems.reduce(
      (tamount, item) => tamount + item.price * item.amount,
      0
    );
  }
  if (action.type === "EMPTY_CART") {
    updateItems = action.value;
    state.totalAmount = 0;
  }

  if (action.type === "DETAILS") {
    state.selectedItem = [action.value];
  }

  return {
    ...state,
    items: updateItems || [],
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchItems] = useReducer(reducer, initialState);

  const api = "https://crudcrud.com/api/64d38ed38099453a98221a400d4c99a7";
  let userEmail;
  const fetchData = async () => {
    userEmail = localStorage.getItem("email");
    if (userEmail) {
      userEmail = userEmail.replace(/[^a-zA-Z]/g, "");
    }
    console.log("fetch data");

    if (userEmail) {
      const url = `${api}/cart${userEmail}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        console.log(data);
        dispatchItems({ type: "SET_ITEMS", value: data });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const emptyCart = () => {
    dispatchItems({ type: "EMPTY_CART", value: [] });
  };

  const addItemsHandler = (item) => {
    dispatchItems({ type: "ADD", value: item });
    userEmail = localStorage.getItem("email");
    if (userEmail) {
      userEmail = userEmail.replace(/[^a-zA-Z]/g, "");
    }

    if (userEmail) {
      const url = `${api}/cart${userEmail}`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            console.log("Item added/updated");
          } else {
            console.error("Error adding/updating item");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const removeItemsHandler = (item) => {
    dispatchItems({ type: "REMOVE", value: item });
    const itemDelete = cartState.items.find((val) => val.id === item.id);

    console.log(itemDelete);

    userEmail = localStorage.getItem("email");
    if (userEmail) {
      userEmail = userEmail.replace(/[^a-zA-Z]/g, "");
    }
    console.log(userEmail);

    if (userEmail) {
      fetch(`${api}/cart${userEmail}/${itemDelete._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) console.log("item deleted");
          else {
            console.error("error while deleting item");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const selectedItemHandler = (item) => {
    dispatchItems({ type: "DETAILS", value: item });
  };

  const cartContext = {
    items: cartState.items,
    fetchData: fetchData,
    totalAmount: cartState.totalAmount,
    selectedItem: cartState.selectedItem,
    emptyCart: emptyCart,
    selectedItemHandler: selectedItemHandler,
    addItem: addItemsHandler,
    removeItem: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
