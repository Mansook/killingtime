import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input, lists, onchange, onsave } from "../store/listSlice";
import Inputer from "./Inputer";
import Word from "./Word";
import Button from "./Button";
const Showlist = () => {
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
const Inputs = () => {
  const dispatch = useDispatch();

  const value = useSelector(input);
  const KoonChange = (e) => {
    dispatch(onchange({ type: "korea", text: e.target.value }));
  };
  const EnonChange = (e) => {
    dispatch(onchange({ type: "english", text: e.target.value }));
  };
  const inputRef = useRef();

  const onSave = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    dispatch(onsave());
  };

  return (
    <form
      onSubmit={onSave}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <div>
          영어
          <Inputer ref={inputRef} onChange={EnonChange} value={value.english} />
        </div>
        <div>
          한글
          <Inputer onChange={KoonChange} value={value.korea} />
        </div>
        <Button type="submit" onClick={onSave}>
          입력
        </Button>
      </div>
      <div>{Showlist()}</div>
    </form>
  );
};

export default Inputs;
