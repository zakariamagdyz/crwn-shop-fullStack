import { createSlice } from "@reduxjs/toolkit";
import directory from "../../assets/data/072 directory.data";

const directorySLice = createSlice({
  name: "directory",
  initialState: directory,
});

export default directorySLice.reducer;
