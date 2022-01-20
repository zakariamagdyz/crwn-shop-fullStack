import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./directoryAsyncActions";

const directorySLice = createSlice({
  name: "category",
  initialState: { isLoading: false, categories: null, error: null },
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
      });
  },
});

export const selectCategoryName = (categoryId) => (state) => {
  if (state.directory.categories) {
    const directory =
      state.directory.categories &&
      state.directory.categories.find((el) => el._id === categoryId);
    return directory.name;
  }
};

export default directorySLice.reducer;
