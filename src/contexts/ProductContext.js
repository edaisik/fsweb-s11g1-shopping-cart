import { createContext, useContext } from "react";
import { data } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useLocalStorage(data, "s11g1Products");

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProducts = () => useContext(ProductContext);
export default ProductContextProvider;
