import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useLocalStorage([], "s11g1Cart");
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    console.log("addItem dediler", item);
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const removeItem = (index) => {
    // verilen itemi sepete ekleyin
    console.log("removeItem dediler", index);
    const newCard = cart.filter((item, fIndex) => fIndex !== index);
    setCart(newCard);
  };

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, getCartTotal, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContextProvider;
