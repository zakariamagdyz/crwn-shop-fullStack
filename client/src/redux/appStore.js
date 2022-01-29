import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import directorySlice from "./directory/directorySLice";
import cartSlice from "./cart/cartSlice";
import favoritesSlice from "./favoriteData/favoriteSlice";
import manageSlice from "./manage/manageSlice";
import ordersSlice from "./ordersData/orderSlice";
//import superAxios from "../config/axios";

// const axiosMiddleware = (store) => (next) => (action) => {
//   if (
//     action.type === "auth/isSignedIn/fulfilled" ||
//     action.type === "auth/signUp/fulfilled" ||
//     action.type === "auth/signIn/fulfilled"
//   ) {
//     superAxios.defaults.headers.common["Authorization"] = action.payload.token;
//   }

//   next(action);
// };

export default configureStore({
  reducer: {
    auth: authSlice,
    directory: directorySlice,
    cart: cartSlice,
    favorites: favoritesSlice,
    orders: ordersSlice,
    manage: manageSlice,
  },
  // middleware: [...getDefaultMiddleware(), axiosMiddleware],
  devTools: process.env.NODE_ENV === "production" ? false : true,
});
