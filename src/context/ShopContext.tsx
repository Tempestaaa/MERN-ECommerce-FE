import { createContext, ReactNode, useState } from "react";
import all_product from "../assets/Frontend_Assets/all_product";
import { ProductFE } from "../types/product.type";

export const ShopContext = createContext<{
  all_product: ProductFE[];
  cartItems: number[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  totalCartItems: () => number;
} | null>(null);

const getDefaultCart = () => {
  let cart = [];
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    let itemInfo;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        itemInfo = all_product.find((p) => p._id === item);
        total += Number(itemInfo?.newPrice) * cartItems[item];
      }
    }
    return total;
  };

  const totalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    totalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
