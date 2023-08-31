import React  from "react"

const CartContext =React.createContext({
    items:[],
    addItems:(item)=>{},
    removeItems:(item)=>{},
    totalAmount:0

})

export default CartContext;