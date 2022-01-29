import { createSlice } from "@reduxjs/toolkit";

const ordersSlcie = createSlice({
  name: "orders",
  initialState: {
    myOrders: [],
    recentOrder: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    //   builder.addCase()
  },
});

export default ordersSlcie.reducer;
