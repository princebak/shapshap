"use client";

import { createContext, useMemo, useReducer } from "react";
// =================================================================================

// =================================================================================
const INITIAL_STATE = {
  cart: [],
};
// ==============================================================

// ==============================================================
export const CartContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      }
      // IF PRODUCT ALREADY EXITS IN CART

      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );
        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };

    default: {
      return state;
    }
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
