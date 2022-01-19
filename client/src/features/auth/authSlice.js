import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
  },
  reducers: {
    signUp: {
      reducer: (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
      },
      prepare: (data) => {
        // localStorage.setItem("user", JSON.stringify(action.payload));
        return { payload: { id: uuidv4(), ...data } };
      },
    },

    signIn: (state, action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    signOut: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut, signUp } = authSlice.actions;

export default authSlice.reducer;
