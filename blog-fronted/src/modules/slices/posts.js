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
  },

  reducers: {
    listposts: (state, action) => ({}),
    listpostssuccess: (state, action) => ({
      posts: action.payload,
      error: null,
    }),
    listpostsfailure: (state, action) => ({
      error: true,
    }),
  },
});
export const { listposts, listpostssuccess, listpostsfailure } =
  listSlice.actions;
export const selectList = (state) => state.list;
export default listSlice.reducer;
