import React from "react";
import { useSelector } from "react-redux";
import { lists } from "../store/listSlice";
import Word from "./Word";
const Read = () => {
  const list = useSelector(lists);
  if (list.length === 0) {
    return <div>단어장이 비어있습니다!</div>;
  } else
    return (
      <div>
        {list.map((w) => (
          <Word key={w.idx} word={w}></Word>
        ))}
      </div>
    );
};

export default Read;
