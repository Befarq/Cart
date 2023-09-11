import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    amountCounter: {},
    increment: (state, action) => {
      state.products.filter((product) => {
        if (product.name == action.payload) {
          product.amount += 1;
          state.amount += 1;
        }
      });
    },
    decrement: (state, action) => {
      state.products.filter((product) => {
        if (product.name == action.payload && product.amount != 0) {
          product.amount -= 1;
          state.amount -= 1;
        }
      });
    },
    remove: (state, action) => {
      state.products = state.products.filter((product) => {
        if (product.name != action.payload) {
          return product;
        }
      });
      state.amount = 0;
      state.products.map((product) => {
        state.amount += product.amount;
      });
    },
  },
});
export const { increment, decrement, remove } = basketSlice.actions;
export default basketSlice.reducer;
