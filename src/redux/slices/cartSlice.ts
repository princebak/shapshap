import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentCart: [],
  },
  reducers: {
    changeCartAmount: (state, action) => {
      let cartList = state.currentCart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        state.currentCart = filteredCart;
      } else if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
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
