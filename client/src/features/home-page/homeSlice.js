import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      return state + 1;
    },
  },
});

export const { increase } = homeSlice.actions;
export default homeSlice.reducer;
