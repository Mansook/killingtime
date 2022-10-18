import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { unvisible } from "../modules/slices/booklist";
import { selectLoading } from "../modules/slices/loading";
import {
  addBook,
  commentChange,
  selectModal,
  titleChange,
} from "../modules/slices/modal";
import Button from "./common/Button";
const Popups = styled.div`
  position: fixed;
  top: 30%;
  left: 40%;
  width: 30%;
  height: 30%;
  background: gray;
  display: flex;
`;
const StInput = styled.input`
  width: 140px;
  height: 20px;
`;

const Modal = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const isloading = useSelector(selectLoading);
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const onClickEvent = async () => {
    await dispatch(
      addBook({
        title: title,
        comment: comment,
      })
    );
    setTitle("");
    setComment("");
    dispatch(unvisible());
  };
  return (
    <Popups>
      <div>
        title:
        <StInput placeholder="이름" value={title} onChange={onTitleChange} />
      </div>
      <div>
        comment:
        <StInput
          placeholder="주석"
          value={comment}
          onChange={onCommentChange}
        />
      </div>
      <div>
        <Button onClick={onClickEvent}>발행</Button>
      </div>
    </Popups>
  );
};

export default Modal;
