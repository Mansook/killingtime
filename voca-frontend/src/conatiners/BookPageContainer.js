import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookPage from "../component/bookpage/BookPage";
import { enToKo } from "../lib/api/papago/translate";
import { isWordValid } from "../functions/isWordValid";
import { enablePrevent } from "../functions/usePreventLeave";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  addWord,
  readBook,
  selectBook,
  delWording,
  addWording,
} from "../modules/slices/wordlist";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading } from "../modules/slices/loading";
import Loading from "../component/Loading";

const BookPageContainer = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(selectBook);
  const [data, setData] = useState();

  const loading = useSelector(selectLoading);
  const [KOR, setKOR] = useState("");
  const [ENG, setENG] = useState("");
  const [error, setError] = useState("");
  const [translated, setTranslated] = useState("korea");

  useEffect(() => {
    dispatch(
      readBook({
        _id: bookId,
      })
    );
  }, [dispatch, bookId]);

  useEffect(() => {
    setData(book || {});
  }, [book]);
  const onTranslate = () => {
    if (ENG === "") return;
    enToKo(ENG).then((res) =>
      setTranslated(res.data.message.result.translatedText)
    );
    setKOR("");
  };
  const onChangeEng = (e) => {
    setENG(e.target.value);
  };
  const onChangeKor = (e) => {
    setKOR(e.target.value);
  };
  const onClickSubmmit = (e) => {
    if (e.target.value === "") {
      if (translated === "korea") {
        setError("빈칸");
        return;
      }
      dispatch(
        addWording({
          korea: translated,
          english: ENG,
        })
      );
      setKOR("");
      setENG("");
      setError("");
      setTranslated("korea");
    } else {
      const text = isWordValid(KOR, ENG, data.words);
      if (text === undefined) {
        dispatch(
          addWording({
            korea: KOR,
            english: ENG,
          })
        );
        setKOR("");
        setENG("");
        setError("");
        setTranslated("korea");
      } else {
        setError(text);
      }
    }
  };

  const onSaveList = () => {
    dispatch(
      addWord({
        _id: bookId,
        words: book.words,
      })
    );
    setKOR("");
    setENG("");
    setTranslated("korea");
  };

  const onRemove = (english) => {
    dispatch(delWording(english));
  };
  if (!data || loading) return <Loading />;
  return (
    <>
      <Header text={bookId} />
      <div style={{ marginTop: "70px" }}>
        <BookPage
          ENG={ENG}
          KOR={KOR}
          onClickSubmmit={onClickSubmmit}
          data={data}
          onChangeEng={onChangeEng}
          onChangeKor={onChangeKor}
          onSaveList={onSaveList}
          onRemove={onRemove}
          onTranslate={onTranslate}
          translated={translated}
          error={error}
        />
      </div>
      <Footer text="footer" />
    </>
  );
};

export default BookPageContainer;
