import { createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as bookAPI from "../../lib/api/books/book";
import createRequestSaga from "../../lib/createRequestSaga";

const ADDBOOK = "modal/addBook";
const modalSaga = createRequestSaga(ADDBOOK, bookAPI.createBook);
export function* addModalSaga() {
  yield takeLatest(addBook, modalSaga);
}
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    title: "",
    comment: "",
    error: false,
  },

  reducers: {
    addBook: (state, action) => {},
    addBooksuccess: (state, action) => ({
      ...state,
      error: false,
    }),
    addBookfailure: (state, action) => ({
      ...state,
      error: true,
    }),
  },
});

export const { addBook, addBooksuccess, addBookfailure } = modalSlice.actions;
export const selectmodal = (state) => state.modal;
export default modalSlice.reducer;
