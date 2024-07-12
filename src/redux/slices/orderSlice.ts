import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    currentOrder: {
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
    },
  },
  reducers: {
    changeOrder: (state, action) => {
      state.currentOrder = { ...state.currentOrder, ...action.payload };
    },
  },
});

export const { changeOrder } = orderSlice.actions;

export default orderSlice.reducer;
