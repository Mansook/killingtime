import React from "react";
import styled from "styled-components";
import { MdRemoveCircleOutline, MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { onremove } from "../store/listSlice";

const Wordcard = styled.div`
  width: 50%;
  height: 40px;
  border: solid black 1px;
  margin: 2px;
  display: flex;
  alignitems: center;
  padding: 3px;
`;
const RemoveBut = styled.button`
  color: black;
  border: none;
  outline: none;
  background: white;
  &:hover {
    color: red;
  }
`;
const Word = (word, type) => {
  const dispatch = useDispatch();
  return (
    <Wordcard>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "5px",
        }}
      >
        {word.word.idx}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        {word.word.english}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        {word.word.korea}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RemoveBut onClick={() => dispatch(onremove(word.word.idx))}>
          <MdRemoveCircleOutline style={{ fontSize: "1.4rem" }} />
        </RemoveBut>
      </div>
    </Wordcard>
  );
};

export default Word;
