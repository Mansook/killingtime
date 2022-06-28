import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  testSheet,
  onPush,
  onInit,
  onChange,
  onSubmit,
} from "../store/testSlice";
import "../css/ans.css";
import Inputer from "./Inputer";
const TestCard = (w) => {
  const list = useSelector(testSheet);
  console.log(w);
  const dispatch = useDispatch();
  const word = w.word;
  console.log(w);
  const onInput = (e) => {
    dispatch(onChange({ text: e.target.value, english: word.english }));
  };
  const iscorrect = (q) => {
    if (q === null) return "null";
    else if (q) return "success";
    return "fail";
  };
  return (
    <div
      style={{
        margin: "5px",
        width: "200px",
      }}
    >
      <div style={{ fontSize: "1rem" }}>{word.english}</div>
      <div>
        <input
          style={{
            width: "170px",
            height: "25px",
            fontSize: "1rem",
            border: "0.2px solid gray",
            margin: "5px 0px",
          }}
          className={iscorrect(word.correct)}
          onChange={onInput}
          placeholder="한글"
        />
      </div>
    </div>
  );
};

export default TestCard;
