import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Loading from "../component/Loading";
import TestHistoryPage from "../component/testpage/TestHistoryPage";
import { selectLoading } from "../modules/slices/loading";
import { readTest, selectReadTest } from "../modules/slices/test";

const TestHistoryPageContainer = () => {
  const { bookId, testId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(
      readTest({
        testid: testId,
      })
    );
  }, [dispatch, testId]);
  const testdata = useSelector(selectReadTest);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header text={testId} />
          <TestHistoryPage data={testdata} testId={testId} />
          ;
          <Footer text="footer" />
        </>
      )}
    </>
  );
};

export default TestHistoryPageContainer;
