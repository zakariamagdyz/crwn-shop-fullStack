import { createSlice } from "@reduxjs/toolkit";

const manageSlice = createSlice({
  name: "manage",
  initialState: {
    currentResource: [],
    currentItem: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    //   builder.addCase()
  },
});

export default manageSlice.reducer;
