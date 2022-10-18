import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookListContainer from "./conatiners/BookListContainer";
import { loadList } from "./modules/slices/booklist";

const Template = () => {
  return (
    <>
      <BookListContainer />
    </>
  );
};

export default Template;
