import { createSlice } from "@reduxjs/toolkit";
import createRequestSaga from "../../lib/createRequestSaga";
import * as testAPI from "../../lib/api/tests/test";
import { takeLatest } from "redux-saga/effects";
const READTEST = "testlist/readtest";
const readtestlistsaga = createRequestSaga(READTEST, testAPI.readTests);
export function* TestListSaga() {
  yield takeLatest(readtest, readtestlistsaga);
}
export const TestListSlice = createSlice({
  name: "testlist",
  initialState: {
    testList: [],
  },

  reducers: {
    readtest: (state, action) => ({}),
    readtestsuccess: (state, action) => ({ testList: action.payload }),
    readtestfailure: (state, action) => ({}),

    AddTest: (state, action) => ({
      testList: [...state.testList, action.payload],
    }),
    onSubmitInList: (state, action) => ({}),
    onSubmitInListsuccess: (state, action) => ({}),
    onSubmitInListfailure: (state, action) => ({}),
  },
});

export const {
  AddTest,
  readtest,
  onSubmitInList,
  onSubmitInListfailure,
  onSubmitInListsuccess,
} = TestListSlice.actions;

export const selectTestList = (state) => state.testlist.testList;

export default TestListSlice.reducer;
