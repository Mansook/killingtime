import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import testReducer from "./testSlice";

const rootReducer = combineReducers({
  read: listReducer,
  test: testReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
