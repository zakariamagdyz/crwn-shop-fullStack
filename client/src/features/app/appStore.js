import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";
import directorySlice from "../directory/directorySLice";
import shopSlice from "../shop-page/shopSlice";
import cartSlice from "../cart-item/cartSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    directory: directorySlice,
    shopItems: shopSlice,
    cart: cartSlice,
  },
});
