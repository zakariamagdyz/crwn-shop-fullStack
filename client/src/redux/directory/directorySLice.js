import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchCategoryChilds,
  fetchItemsByCategory,
} from "./directoryAsyncActions";

const directorySLice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    error: null,
    categories: null,
    categoryWithChilds: null,
    categoriesWithItems: null,
  },
  reducers: {
    setCurrentCategory: function (state, action) {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }) //////////////////////////////////////////////////
      .addCase(fetchCategoryChilds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategoryChilds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryWithChilds = action.payload.category;
      })
      .addCase(fetchCategoryChilds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) //////////////////////////////////////////////////
      .addCase(fetchItemsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItemsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoriesWithItems = action.payload.data;
      })
      .addCase(fetchItemsByCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setCurrentCategory } = directorySLice.actions;

export default directorySLice.reducer;
