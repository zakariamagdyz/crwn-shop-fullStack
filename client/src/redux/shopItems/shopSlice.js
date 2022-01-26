import { createSlice } from "@reduxjs/toolkit";
import { fetchItemsByCategory } from "./shopAsyncActions";

const shopItems = createSlice({
  name: "shopItems",
  initialState: { shopItems: null, isLoading: null, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItemsByCategory.fulfilled, (state, action) => {
        state.shopItems = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchItemsByCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default shopItems.reducer;
