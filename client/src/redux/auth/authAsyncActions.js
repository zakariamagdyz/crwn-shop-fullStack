import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "POST",
        url: "/users/signIn",
        data: JSON.stringify(body),
      });

      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "POST",
        url: "/users/signUp",
        data: JSON.stringify(body),
      });

      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await axios({
      method: "GET",
      url: "/users/signOut",
    });

    return res.data.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const isSignedIn = createAsyncThunk(
  "auth/isSignedIn",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "GET",
        url: "/users/isSignedin",
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
