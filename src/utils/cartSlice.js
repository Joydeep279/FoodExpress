import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItem.length = 0;
    },
    removeItem: (state) => {
      state.cartItem.pop();
    },
  },
});
export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
