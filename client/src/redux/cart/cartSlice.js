import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart(state, action) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item) item.quantity += 1;
      else state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    clear(state, action) {
      const inx = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (inx !== -1) state.cartItems.splice(inx, 1);
    },

    remove(state, action) {
      const inx = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (action.payload.quantity > 1) state.cartItems[inx].quantity -= 1;
      else state.cartItems.splice(inx, 1);
    },
  },
});

export const selectItems = (state) => state.cart.cartItems;

export const selectItemsCount = createSelector([selectItems], (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
});

export const selectTotalPrice = createSelector([selectItems], (items) => {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
});

export const { addToCart, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
