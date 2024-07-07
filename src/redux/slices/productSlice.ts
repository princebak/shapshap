import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
    productList: [],
  },
  reducers: {
    changeCurrentProduct: (state, action) => {
      const code = action.payload;
      state.currentProduct = state.productList.find(
        (item) => item.code === code
      );
    },
    loadProducts: (state, action) => {
      state.productList = action.payload;
    },
    updateProduct: (state, action) => {
      const updatingProduct = action.payload;

      state.productList = state.productList.map((item) => {
        if (item._id === updatingProduct._id) {
          return { ...updatingProduct };
        } else {
          return item;
        }
      });
    },
  },
});

export const { changeCurrentProduct, loadProducts, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
