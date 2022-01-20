import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import directorySlice from "./directory/directorySLice";
import cartSlice from "./cart/cartSlice";
import collectionSlice from "./collection/collectionSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    directory: directorySlice,
    cart: cartSlice,
    collection: collectionSlice,
  },
});
