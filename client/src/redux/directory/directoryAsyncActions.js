import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import { toast } from "react-toastify";

export const fetchCategories = createAsyncThunk(
  "categories/get",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "GET",
        url: "/categories",
      });
      return res.data.data.categories;
    } catch (error) {
      toast.error(error.response.data.message, { theme: "colored" });

      // in listner render error to client by use action.payload.message
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCategoryChilds = createAsyncThunk(
  "categoryWithChilds/get",
  async ({ categoryId }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "GET",
        url: `/categories/${categoryId}`,
      });

      return res.data.data;
    } catch (error) {
      toast.error(error.response.data.message, { theme: "colored" });
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchItemsByCategory = createAsyncThunk(
  "categoriesWithChilds/get",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "GET",
        url: "/items/byCategory",
      });
      return res.data.data;
    } catch (error) {
      toast.error(error.response.data.message, { theme: "colored" });
      return rejectWithValue(error.response.data);
    }
  }
);
