import { toast } from "react-toastify";
import { product } from "../assets/assets";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [test, setTest] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [cartOrder, setCartOrder] = useState([]);
  const [log, setLog] = useState(false);

  const addToCart = async (itemId, size) => {
    if (size.length === 0) {
      toast.error("Select Product Size");
      return;
    }

    let cartDate = structuredClone(cartItems);
    if (cartDate[itemId]) {
      size.forEach((element) => {
        if (cartDate[itemId][element]) {
          cartDate[itemId][element] += 1;
        } else {
          cartDate[itemId][element] = 1;
        }
      });
      // if (cartDate[itemId][size]) {
      //   cartDate[itemId][size] += 1;
      // } else {
      //   cartDate[itemId][size] = 1;
      // }
    } else {
      cartDate[itemId] = {};

      size.forEach((element) => {
        cartDate[itemId][element] = 1;
      });
    }
    setCartItems(cartDate);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (item, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[item][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = product.find((p) => p._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const delivery_fee = 9;
  const currency = "$";

  const value = {
    getCartAmount,
    product,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    test,
    setTest,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    navigate,
    cartOrder,
    setCartOrder,
    log,
    setLog,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
