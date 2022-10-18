import React, { useEffect, useState, useRef } from "react";

import WordList from "./WordList";

import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Inputer from "../common/Inputer";
const BookPage = ({
  ENG,
  KOR,
  data,
  error,
  onChangeEng,
  onChangeKor,
  onClickSubmmit,
  onSaveList,
  onRemove,
  onTranslate,
  translated,
}) => {
  const { _id, title, comment, publishedDate, star, words } = data;

  const [wordlist, setWordlist] = useState();
  const [fin, setFin] = useState("false");
  const inputRef = useRef();

  useEffect(() => {
    setWordlist(words);
  }, [words, wordlist]);

  const onSave = (e) => {
    onClickSubmmit(e);
    e.preventDefault();
    inputRef.current.focus();
  };

  const navigate = useNavigate();

  return (
    <form style={{ marginLeft: "200px" }} onSubmit={onSave}>
      <div>
        <Inputer
          placeholder="english"
          ref={inputRef}
          value={ENG}
          onChange={onChangeEng}
        />
        <Inputer
          placeholder={translated}
          value={KOR}
          onChange={onChangeKor}
          onFocus={onTranslate}
        />
        {error}
      </div>
      <div>
        <Button type="submit" onClick={onSave}>
          입력
        </Button>
        <Button type="button" onClick={onSaveList}>
          저장
        </Button>
      </div>
      <div>
        <Button type="button" onClick={() => navigate("test")}>
          시험보기
        </Button>
      </div>
      <WordList
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        wordlist={wordlist || []}
        onRemove={onRemove}
      />
    </form>
  );
};

export default BookPage;
