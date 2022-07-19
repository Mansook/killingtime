import { createSlice } from "@reduxjs/toolkit";
import createRequestSaga from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";
const READ = "read/readpost";
const readpostSaga = createRequestSaga(READ, authAPI.readPost);

export function* readSaga() {
  yield takeLatest(readpost, readpostSaga);
}
export const readSlice = createSlice({
  name: "read",
  initialState: {
    post: null,
    error: null,
  },

  reducers: {
    readpost: (state, action) => {},
    readpostsuccess: (state, action) => ({
      post: action.payload,
      error: null,
    }),
    readpostfailure: (state, action) => ({ error: true }),
    unloadpost: (state, action) => ({
      post: null,
      error: null,
    }),
  },
});
export const { readpost, readpostsuccess, readpostfailure, unloadpost } =
  readSlice.actions;
export const selectPost = (state) => state.read;
export default readSlice.reducer;
