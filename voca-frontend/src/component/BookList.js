import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { visible, toggleStar } from "../modules/slices/booklist";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
const InlineBox = styled.div`
width: 100%,
height: 100%,
background:gray,
display:flex,
flex-direction:column`;

const Box = styled.div`
  width: 100%;
  height: 100px;
  background: skyblue;
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
`;
const SelDiv = styled.div`
  width: 100%;
  height: 100%;
  cursor: onClick;
  border-bottom: 1px solid black;
`;
const AddBook = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Button
          style={{ marginTop: "60px" }}
          onClick={() => dispatch(visible())}
        >
          단어장 만들기
        </Button>
      </Box>
    </>
  );
};
const Book = ({ book, onRemove }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, comment, title, publishedDate, words, star } = book;
  const [visible, setVisible] = useState(false);
  const setToggle = () => {
    setVisible(!visible);
  };
  return (
    <Box>
      <div>
        <FaRegPaperPlane />
      </div>
      <div onClick={() => navigate(`/${_id}`)}>
        <div>{title}</div>
        <div>{comment}</div>
        <div>{publishedDate}</div>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          background: "gray",
          cursor: "pointer",
        }}
      >
        <InlineBox>
          <SelDiv onClick={() => onRemove(_id)}>삭제</SelDiv>
          <SelDiv onClick={() => navigate(`${_id}`)}>편집</SelDiv>
          <SelDiv>이동</SelDiv>
          <SelDiv>프린트</SelDiv>
          <SelDiv>복제</SelDiv>
        </InlineBox>
      </div>
      <div>
        <RiArrowDownSLine
          style={{
            cursor: "pointer",
          }}
          onClick={setToggle}
        />
      </div>
      <div
        onClick={() =>
          dispatch(
            toggleStar({
              _id: _id,
              star: !star,
            })
          )
        }
      >
        {star ? <AiFillStar /> : <AiOutlineStar />}
      </div>
    </Box>
  );
};

const BookList = ({ loading, error, list, onRemove }) => {
  return (
    <>
      <AddBook />
      {list.map((book) => (
        <Book onRemove={onRemove} book={book} key={book._id} />
      ))}
    </>
  );
};

export default BookList;
