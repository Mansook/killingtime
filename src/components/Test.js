import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lists } from "../store/listSlice";
import { onInit, testSheet, onSubmit, score } from "../store/testSlice";
import Button from "./Button";
import TestCard from "./TestCard";

const shuffle = () => Math.random() - 0.5;

const Test = () => {
  const list = useSelector(lists);
  const [testsheet, setTestsheet] = useState([]);
  const tests = useSelector(testSheet);
  const scores = useSelector(score);
  const dispatch = useDispatch();
  const createsheet = () => {
    var lst = Array(list.length);
    for (var i = 0; i < list.length; i++) {
      lst[i] = i;
    }
    lst = [...lst].sort(shuffle);
    const newsheet = [];
    for (i = 0; i < list.length; i++) {
      newsheet.push(list[lst[i]]);
    }
    return newsheet;
  };
  useEffect(() => {
    const test = createsheet();
    setTestsheet(test);
    dispatch(onInit(test));
  }, [dispatch]);
  const Submit = () => {
    dispatch(onSubmit());
  };

  return (
    <div
      style={{
        height: "1400px",
        width: "650px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {tests.map((q) => (
        <TestCard key={q.idx} word={q} />
      ))}
      <div>
        <Button onClick={Submit}>제출</Button>
      </div>
      <div>
        <div>corrects:{scores[0]}</div>
        <div>wrongs:{scores[1]}</div>
      </div>
    </div>
  );
};

export default Test;
