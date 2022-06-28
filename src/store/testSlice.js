import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idx: 0,
  corrects: 0,
  wrongs: 0,
  inputs: "",
  testsheet: [
    /*{
       idx:0,
       english:" ",
       answer:" ",
       input:" ",
       correct:"true",
    }*/
  ],
};
const testSlice = createSlice({
  name: "tester",
  initialState,
  reducers: {
    onPush(state, action) {
      //const nsheet = [...state.testsheet].push(action.payload);
      // state.testsheet = nsheet;
    },
    onInit(state, action) {
      state.idx = action.payload.length;
      state.corrects = 0;
      state.wrongs = 0;
      state.input = "";
      state.testsheet = [];

      const lst = action.payload;
      lst.map((w) => {
        const data = {
          idx: w.idx,
          english: w.english,
          answer: w.korea,
          input: "",
          correct: null,
        };
        state.testsheet.push(data);
      });
    },
    onChange(state, action) {
      //찜찜
      state.testsheet.map((l) => {
        l.english === action.payload.english
          ? (l.input = action.payload.text)
          : (state.idx = state.idx);
      });
    },
    onSubmit(state, action) {
      const newsheet = [];
      state.testsheet.map((l) =>
        newsheet.push({
          idx: l.idx,
          english: l.english,
          answer: l.answer,
          input: l.input,
          correct:
            l.answer.replace(" ", "") === l.input.replace(" ", "")
              ? true
              : false,
        })
      );
      state.corrects = 0;
      state.wrongs = 0;
      newsheet.map((l) => {
        l.correct === true ? (state.corrects += 1) : (state.wrongs += 1);
      });
      state.testsheet = newsheet;
    },
  },
});

export const { onChange, onSubmit, onInit, onPush } = testSlice.actions;
export default testSlice.reducer;
export const input = (state) => state.test.inputs;
export const testSheet = (state) => state.test.testsheet;
export const score = (state) => [state.test.corrects, state.test.wrongs];
