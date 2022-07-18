import { createSlice } from "@reduxjs/toolkit";
import createRequestSaga from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";
const POST = "write/writepost";
const writepostSaga = createRequestSaga(POST, authAPI.writePost);

export function* writeSaga() {
  yield takeLatest(writepost, writepostSaga);
}
export const writeSlice = createSlice({
  name: "load",
  initialState: {
    title: "",
    body: "",
    tags: [],
    post: null,
    postError: null,
  },

  reducers: {
    initialize: (state, action) => ({
      title: "",
      body: "",
      tags: [],
    }),
    changefield: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),
    writepost: (state, action) => ({
      ...state,
      post: null,
      postError: null,
    }),
    writepostsuccess: (state, action) => ({
      ...state,
      post: action.payload,
      postError: null,
    }),
    writepostfailure: (state, action) => ({
      ...state,
      postError: true,
    }),
  },
});
export const {
  initialize,
  changefield,
  writepost,
  writepostsuccess,
  writepostfailure,
} = writeSlice.actions;
export const selectTag = (state) => state.write.tags;
export const selectWrite = (state) => state.write;
export default writeSlice.reducer;
