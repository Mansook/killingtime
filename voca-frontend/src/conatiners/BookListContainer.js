import React, { useEffect } from "react";
import BookList from "../component/BookList";
import { useSelector, useDispatch } from "react-redux";
import {
  loadList,
  removeBook,
  selectErr,
  selectList,
  selectMod,
} from "../modules/slices/booklist";
import { selectLoading } from "../modules/slices/loading";
const BookListContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const err = useSelector(selectErr);
  const list = useSelector(selectList);
  const onRemove = (bookId) => {
    dispatch(
      removeBook({
        _id: bookId,
      })
    );
    dispatch(loadList());
  };
  useEffect(() => {
    dispatch(loadList());
  }, [dispatch]);
  return (
    <BookList onRemove={onRemove} loading={loading} error={err} list={list} />
  );
};

export default BookListContainer;
