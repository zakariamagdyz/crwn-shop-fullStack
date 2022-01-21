import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const fetchCategories = createAsyncThunk(
  "categories/get",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "GET",
        url: "/categories/withItems",
      });
      return res.data.data.categories;
    } catch (error) {
      // in listner render error to client by use action.payload.message
      return rejectWithValue(error.response.data);
    }
  }
);
