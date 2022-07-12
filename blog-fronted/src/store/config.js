import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/slices/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
