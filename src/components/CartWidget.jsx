import { useState } from "react"
import CartIcon from "./CartIcon"
import "./CartIcon.css";

function CartWidget(){

    const[cartItems, setCartItems]=
    useState(3);

    return(
        <div className="cart_container">
            <CartIcon ancho={50} alto={50}/>
            <span>{cartItems}</span>
        </div>
    )
}

export default CartWidget