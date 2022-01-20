import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const fetchACollection = createAsyncThunk(
  "collection/get",
  async ({ categoryId }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "GET",
        url: `/categories/${categoryId}/items`,
      });
      return res.data.data.shopitems;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const collectionSlice = createSlice({
  name: "categoryItems",
  initialState: { isLoading: false, error: null, collection: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchACollection.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchACollection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.collection = action.payload;
      })
      .addCase(fetchACollection.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default collectionSlice.reducer;
