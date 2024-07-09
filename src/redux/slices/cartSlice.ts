import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentCart: null,
  },
  reducers: {
    changeCartAmount: (state, action) => {
      let cartList = state.currentCart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item._id === cartItem._id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item._id !== cartItem._id);
        state.currentCart = filteredCart;
      }
      // IF PRODUCT ALREADY EXITS IN CART

      if (exist) {
        const newCart = cartList.map((item) =>
          item._id === cartItem._id ? { ...item, qty: cartItem.qty } : item
        );
        state.currentCart = newCart;
      } else {
        state.currentCart = [...cartList, cartItem];
      }
    },
  },
});

export const { changeCartAmount } = cartSlice.actions;

export default cartSlice.reducer;
