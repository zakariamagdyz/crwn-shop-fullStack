import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  removeFromFavorites,
  fetchAllFavorites,
} from "./favoriteAsyncActions";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { favorites: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(addToFavorites.pending);
  },
});

export default favoriteSlice.reducer;
