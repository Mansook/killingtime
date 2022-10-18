import { createSlice } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as bookAPI from "../../lib/api/books/book";
import createRequestSaga from "../../lib/createRequestSaga";
const LOADLIST = "list/loadList";
const REMOVEBOOK = "list/removeBook";
const loadListSaga = createRequestSaga(LOADLIST, bookAPI.listBooks);
const toggleStarSaga = function* (action) {
  const { _id, star } = action.payload;
  try {
    console.log(_id, star);
    yield call(bookAPI.patchBook, { _id: _id, star: star });
  } catch (e) {
    console.log(e);
  }
};
const reloadListSaga = function* (action) {
  yield put(loadList());
};
const removeBookSaga = createRequestSaga(REMOVEBOOK, bookAPI.deleteBook);
export function* booklistSaga() {
  yield takeLatest(loadList, loadListSaga);
  yield takeLatest(unvisible, reloadListSaga);
  yield takeLatest(toggleStar, toggleStarSaga);
  yield takeLatest(removeBook, removeBookSaga);
}
export const bookListSlice = createSlice({
  name: "list",
  initialState: {
    bookList: [],
    addBook: false,
    error: false,
  },

  reducers: {
    visible: (state, action) => ({
      ...state,
      addBook: true,
    }),
    unvisible: (state, action) => ({
      ...state,
      addBook: false,
    }),
    removeBook: (state, action) => {},
    removeBooksuccess: (state, action) => {},
    removeBookfailure: (state, action) => {},
    loadList: (state, action) => {},
    loadListsuccess: (state, action) => ({
      bookList: action.payload,
      error: false,
    }),
    loadListfailure: (state, action) => ({
      error: true,
    }),
    toggleStar: (state, action) => {
      state.bookList.forEach((book) => {
        book._id === action.payload._id
          ? (book.star = !book.star)
          : (book.star = book.star);
      });
    },
  },
});

export const {
  loadList,
  loadListsuccess,
  loadListfailure,
  removeBook,
  visible,
  unvisible,
  toggleStar,
} = bookListSlice.actions;

export const selectList = (state) => state.list.bookList;
export const selectErr = (state) => state.list.err;
export const selectMod = (state) => state.list.addBook;
export default bookListSlice.reducer;
