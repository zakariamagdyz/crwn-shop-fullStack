import { createSlice, createSelector } from "@reduxjs/toolkit";
import { signIn, signOut, signUp, isSignedIn } from "./authAsyncActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.currentUser = null;
        state.isLoggedIn = false;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(isSignedIn.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(isSignedIn.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

const selectUser = (state) => state.auth.currentUser;

export const selectUsername = createSelector([selectUser], (user) => {
  if (user) {
    return user.name.split(" ")[0];
  }
});

export default authSlice.reducer;
