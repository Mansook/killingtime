import { createSlice } from "@reduxjs/toolkit";
export const loadSlice = createSlice({
  name: "load",
  initialState: {},

  reducers: {
    startLoading: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    finishLoading: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
});
export const { startLoading, finishLoading } = loadSlice.actions;
export default loadSlice.reducer;
