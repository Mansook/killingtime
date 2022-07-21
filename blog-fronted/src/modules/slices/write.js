import { createSlice } from "@reduxjs/toolkit";
import createRequestSaga from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";
import { readSaga } from "./post";
const POST = "write/writepost";
const UPDATE = "write/updatepost";
const writepostSaga = createRequestSaga(POST, authAPI.writePost);
const updatepostSaga = createRequestSaga(UPDATE, authAPI.updatePost);
export function* writeSaga() {
  yield takeLatest(writepost, writepostSaga);
}
export function* updateSaga() {
  yield takeLatest(updatepost, updatepostSaga);
}
export const writeSlice = createSlice({
  name: "write",
  initialState: {
    title: "",
    body: "",
    tags: [],
    post: null,
    postError: null,
    originalPostId: null,
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
    setoriginalpost: (state, { payload: post }) => ({
      ...state,

      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post.user._id,
    }),
    updatepost: (state, action) => {},
    updatepostsuccess: (state, action) => ({
      ...state,
      post: action.payload,
      postError: null,
    }),
    updatepostfailure: (state, action) => ({
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
  setoriginalpost,
  updatepost,
  updatepostsuccess,
  updatepostfailure,
} = writeSlice.actions;
export const selectTag = (state) => state.write.tags;
export const selectWrite = (state) => state.write;
export const selectOriginalPostId = (state) => state.write.originalPostId;
export default writeSlice.reducer;
