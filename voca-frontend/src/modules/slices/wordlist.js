import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { call, put, takeLatest } from "redux-saga/effects";

import * as bookAPI from "../../lib/api/books/book";
import createRequestSaga from "../../lib/createRequestSaga";
import { finishLoading, startLoading } from "./loading";

const ADDWORD = "book/addWord";
const READBOOK = "book/readBook";
const ReadSaga = createRequestSaga(READBOOK, bookAPI.readBook);
const AddBookSaga = createRequestSaga(ADDWORD, bookAPI.addWordInBook);

export function* readBookSaga() {
  yield takeLatest(readBook, ReadSaga);
  yield takeLatest(addWord, AddBookSaga);
}
export const BookSlice = createSlice({
  name: "book",
  initialState: {
    book: [],
    error: false,
  },

  reducers: {
    readBook: (state, action) => ({
      ...state,
    }),
    readBooksuccess: (state, action) => ({
      ...state,
      book: action.payload,
      error: false,
    }),
    readBookfailure: (state, action) => ({
      ...state,
      error: true,
    }),

    addWord: (state, action) => ({
      ...state,
    }),

    addWordsuccess: (state, action) => ({
      ...state,
      error: false,
    }),
    addWordfailure: (state, action) => ({
      error: true,
    }),
    addWording: (state, action) => {
      state.book.words = [
        {
          korea: action.payload.korea,
          english: action.payload.english,
        },
        ...state.book.words,
      ];
    },
    delWording: (state, action) => {
      state.book.words = state.book.words.filter(
        (word) => word.english !== action.payload
      );
    },
  },
});

export const {
  InsertWord,
  readBook,
  readBooksuccess,
  readBookfailure,
  addWord,
  addWordfailure,
  addWording,
  addWordsuccess,
  delWording,
} = BookSlice.actions;

export const selectBook = (state) => state.book.book;
export const selectInput = (state) => state.book.input;
export default BookSlice.reducer;
