import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TestPage from "../component/testpage/TestPage";
import TestListPage from "../component/testpage/TestListPage";
import { createQuestion } from "../functions/createQuestions";
import { selectBook } from "../modules/slices/wordlist";
import { useEffect } from "react";
import {
  CreateTest,
  onSubmitTest,
  selectTest,
  selectTestId,
} from "../modules/slices/test";
import { selectLoading } from "../modules/slices/loading";
import { readtest, selectTestList } from "../modules/slices/testlist";
import Loading from "../component/Loading";
const TestPageContainer = () => {
  const book = useSelector(selectBook);
  const testdata = useSelector(selectTest);
  const testid = useSelector(selectTestId);
  const testlist = useSelector(selectTestList);
  const loading = useSelector(selectLoading);
  const navigate = useNavigate();
  const { bookId } = useParams();

  const dispatch = useDispatch();

  const testBook = useSelector(selectTest);

  useEffect(() => {
    dispatch(readtest({ bookid: bookId }));
  }, [dispatch, bookId, testid]);

  const onSubmit = () => {
    const newdata = testdata.map((data) =>
      data.input === data.answer
        ? { ...data, correct: true }
        : { ...data, correct: false }
    );
    dispatch(
      onSubmitTest({
        data: newdata,
        testid: testid,
      })
    );
    navigate(`${testid}`);
  };
  const onCreateTest = () => {
    const testBook = createQuestion(book.words);
    dispatch(CreateTest({ bookid: bookId, data: testBook }));
  };

  if (loading || !testBook || !testlist) return <Loading />;
  else {
    return (
      <>
        <Header text={bookId} />

        {testid === "" ? (
          <div style={{ marginTop: "70px" }}>
            <TestListPage testlist={testlist} />

            <button onClick={onCreateTest}>테스트 생성</button>
          </div>
        ) : (
          <div style={{ marginTop: "70px", marginBottom: "70px" }}>
            <TestPage testBook={testBook} onSubmit={onSubmit} />
          </div>
        )}
        <Footer text="시험" />
      </>
    );
  }
};

export default TestPageContainer;
