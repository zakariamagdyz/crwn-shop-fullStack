import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const fetchItemsByCategory = createAsyncThunk(
  "shopItems/get",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios({
        method: "GET",
        url: "/items/byCategory",
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
