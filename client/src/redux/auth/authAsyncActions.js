import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import { toast } from "react-toastify";

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
      toast.error(error.response.data.message, { theme: "colored" });
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
      toast.error(error.response.data.message, { theme: "colored" });
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
    toast.error(error.response.data.message, { theme: "colored" });

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

export const updateUser = createAsyncThunk(
  "userUpdate/patch",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios({
        method: "PATCH",
        url: "/users/updateMe",
        data: body,
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
  {
    condition: (body, { getState, extra }) => {
      const { auth } = getState();
      if (auth.isLoading === true) {
        return false;
      }
    },
  }
);

export const updatePassword = createAsyncThunk(
  "updatePassword/patch",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios({
        method: "PATCH",
        url: "/users/updateMyPassword",
        data: body,
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
  {
    condition: (body, { getState, extra }) => {
      const { auth } = getState();
      if (auth.isLoading === true) {
        return false;
      }
    },
  }
);

export const updateAvatar = createAsyncThunk(
  "updateAvatar/patch",
  async ({ body }, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const formData = new FormData();
      formData.append("photo", body);
      const { data } = await axios({
        method: "PATCH",
        url: "/users/updateMe",
        data: formData,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
