import { createSlice } from "@reduxjs/toolkit";
import createRequestSaga from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";
const LIST = "list/listposts";
const listpostsSaga = createRequestSaga(LIST, authAPI.listPosts);

export function* postsSaga() {
  yield takeLatest(listposts, listpostsSaga);
}
export const listSlice = createSlice({
  name: "list",
  initialState: {
    posts: null,
    error: null,
    lastPage: 1,
  },

  reducers: {
    listposts: (state, action) => ({
      ...state,
    }),
    listpostssuccess: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts: posts,
      error: null,
      lastPage: parseInt(response.headers["last-page"], 10),
    }),
    listpostsfailure: (state, action) => ({
      error: true,
    }),
  },
});
export const { listposts, listpostssuccess, listpostsfailure } =
  listSlice.actions;
export const selectList = (state) => state.list;
export const selectLastPage = (state) => state.list.lastPage;
export default listSlice.reducer;
