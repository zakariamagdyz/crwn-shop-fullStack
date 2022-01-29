import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const fetchAllFavorites = createAsyncThunk(
  "favorites/get",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios({ method: "GET", url: "/favorites" });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "favorites/post",
  async ({ item }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios({
        post: "POST",
        url: "/favorites",
        data: { item },
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "favorites/delete",
  async ({ itemId }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios({
        method: "DELETE",
        url: `/favorites/${itemId}`,
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
