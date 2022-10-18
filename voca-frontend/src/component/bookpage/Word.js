import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
export const WordBox = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid gray;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Word = ({ word, onRemove }) => {
  const { korea, english } = word;

  return (
    <WordBox>
      <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
        <div style={{ marginRight: "60px" }}>{english}</div>
        <div>{korea}</div>
      </div>
      <div>
        <AiOutlineDelete onClick={() => onRemove(english)} />
        <VscThreeBars />
      </div>
    </WordBox>
  );
};

export default Word;
