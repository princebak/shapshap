import { createSlice } from "@reduxjs/toolkit";

const orderInitialState = {
  status: "",
  products: [],
  shippingAddress: {},
  billingAddress: {},
  note: "",
  paymentMethod: "",
  rawTotal: 0,
  totalDiscount: 0,
  shippingFee: 0,
  tax: 0,
  total: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    currentOrder: orderInitialState,
  },
  reducers: {
    changeOrder: (state, action) => {
      state.currentOrder = { ...state.currentOrder, ...action.payload };
    },
    reinitOrder: (state) => {
      console.log("reinitOrder");

      state.currentOrder = orderInitialState;
    },
  },
});

export const { changeOrder, reinitOrder } = orderSlice.actions;

export default orderSlice.reducer;
