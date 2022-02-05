import { createSlice, createSelector } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  signIn,
  signOut,
  signUp,
  isSignedIn,
  updateUser,
  updatePassword,
  updateAvatar,
} from "./authAsyncActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      }) ////////////////////////////////////////////
      .addCase(signUp.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      }) ////////////////////////////////////////////
      .addCase(signOut.fulfilled, (state, action) => {
        state.currentUser = null;
        state.isLoggedIn = false;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload;
      }) ////////////////////////////////////////////
      .addCase(isSignedIn.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(isSignedIn.rejected, (state, action) => {
        state.error = action.payload;
      }) ////////////////////////////////////////////
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoading = false;
        toast.success("Data updated successfully :)", { theme: "colored" });
      })
      .addCase(updateUser.rejected, (state, action) => {
        toast.error(action.payload.message, { theme: "colored" });
        state.isLoading = false;
        state.error = action.payload;
      }) ////////////////////////////////////////////
      .addCase(updatePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        toast.success("Password updated successfully :)", { theme: "colored" });
        state.isLoading = false;
        state.currentUser = action.payload.user;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        toast.error(action.payload.message, { theme: "colored" });
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        toast.success("Photo updated successfully :)", { theme: "colored" });
        state.currentUser = action.payload.user;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        toast.error(action.payload.message, { theme: "colored" });
        state.currentUser = action.payload.user;
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
