import { createSlice } from "@reduxjs/toolkit";
import createRequestSaga from "../../lib/createRequestSaga";
import * as testAPI from "../../lib/api/tests/test";
import { takeLatest } from "redux-saga/effects";
const CREATETEST = "test/CreateTest";
const SUBMITTEST = "test/onSubmitTest";
const READTEST = "test/readTest";

const testSaga = createRequestSaga(CREATETEST, testAPI.createTest);
const submitSaga = createRequestSaga(SUBMITTEST, testAPI.submitTest);
const readTestSaga = createRequestSaga(READTEST, testAPI.readTestHistory);

export function* TestSaga() {
  yield takeLatest(CreateTest, testSaga);
  yield takeLatest(onSubmitTest, submitSaga);
  yield takeLatest(readTest, readTestSaga);
}
export const TestSlice = createSlice({
  name: "test",
  initialState: {
    testid: "",
    testData: [],
    readData: [],
  },

  reducers: {
    CreateTest: (state, action) => ({
      ...state,
      testData: action.payload.data,
    }),
    CreateTestsuccess: (state, action) => ({
      ...state,
      testid: action.payload._id,
    }),
    CreateTestfailure: (state, action) => ({}),
    onSubmitTest: (state, action) => {
      const corrected = state.testData.map((q) =>
        q.answer === q.input
          ? { ...q, correct: true }
          : { ...q, correct: false }
      );
      state.testData = corrected;
    },
    onSubmitTestsuccess: (state, action) => ({
      ...state,
    }),
    onSubmitTestfailure: (state, action) => ({}),
    onAnswerChange: (state, action) => {
      const eng = action.payload.english;
      const input = action.payload.input;
      const newdata = state.testData.map((data) =>
        data.english === eng ? { ...data, input: input } : { ...data }
      );
      state.testData = newdata;
    },
    readTest: (state, action) => ({
      ...state,
    }),
    readTestsuccess: (state, action) => ({
      ...state,
      testid: "",
      testData: [],
      readData: action.payload.data,
    }),
    readTestfailure: (state, action) => ({}),
  },
});

export const { CreateTest, onSubmitTest, onAnswerChange, readTest } =
  TestSlice.actions;
export const selectTest = (state) => state.test.testData;
export const selectTestId = (state) => state.test.testid;
export const selectReadTest = (state) => state.test.readData;
export default TestSlice.reducer;
