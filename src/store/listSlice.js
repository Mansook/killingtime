import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputs: { korea: "", english: "" },
  idx: 1,
  lists: [],
};
const listSlice = createSlice({
  name: "listcounter",
  initialState,
  reducers: {
    onchange(state, action) {
      action.payload.type === "korea"
        ? (state.inputs.korea = action.payload.text)
        : (state.inputs.english = action.payload.text);
    },
    onsave(state) {
      const newlst = [...state.lists];
      const data = {
        idx: state.idx,
        english: state.inputs.english,
        korea: state.inputs.korea,
      };
      if (
        data.english !== "" &&
        data.korea !== "" &&
        newlst.find((e) => e.english === data.english) === undefined
      ) {
        newlst.push(data);
        state.lists = newlst;
        state.idx += 1;
        state.inputs.korea = "";
        state.inputs.english = "";
      } else {
        alert("이미 존재하거나 빈칸이 있습니다");
      }
    },
    onremove(state, action) {
      const idx = action.payload;
      const newlst = state.lists.filter((w) => w.idx !== idx);
      state.idx -= 1;

      var i = 1;
      newlst.map((w) => (w.idx = i++));
      state.lists = newlst;
    },
  },
});

export const { onchange, onsave, onremove } = listSlice.actions;
export default listSlice.reducer;
export const input = (state) => state.read.inputs;
export const lists = (state) => state.read.lists;
