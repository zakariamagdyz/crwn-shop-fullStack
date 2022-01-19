import { createSlice, createSelector } from "@reduxjs/toolkit";
import shopItems from "../../assets/data/shop.data";

export default createSlice({ name: "shop", initialState: shopItems }).reducer;

const selectItems = (state) => state.shopItems;

export const selectCollectionItem = (categoryName) =>
  createSelector([selectItems], (items) => {
    return items.find((item) => item.routeName === categoryName);
  });
