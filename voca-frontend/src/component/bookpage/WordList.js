import React from "react";
import Word from "./Word";
import styled from "styled-components";
export const ListBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  border-radius: 5px;
  border: 2px solid black;
  background-color: #92a8d1;
`;

const WordList = ({ wordlist, onRemove }) => {
  const list = wordlist;

  return (
    <ListBox>
      {list.map((word) => (
        <Word key={word.english} word={word} onRemove={onRemove} />
      ))}
    </ListBox>
  );
};

export default WordList;
