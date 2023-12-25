import React from "react";
import { ScCartCheckout } from "./scParts";

import { useCart } from "../contexts/CartContext";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const { cart, getCartTotal } = useCart();

  return (
    <div>
      {cart.map((item, orderInCart) => (
        <Item key={`${item.id}_${orderInCart}`} order={orderInCart} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
