import React from "react";
import { Routes, Route } from "react-router-dom";
import PaPago from "./component/bookpage/PaPago.js";

import MainPage from "./component/MainPage";
import BookPageContainer from "./conatiners/BookPageContainer";
import TestHistoryPageContainer from "./conatiners/TestHistoryPageContainer";
import TestPageContainer from "./conatiners/TestPageContainer";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:bookId" element={<BookPageContainer />} />
      <Route path="/:bookId/test" element={<TestPageContainer />} />
      <Route
        path="/:bookId/test/:testId"
        element={<TestHistoryPageContainer />}
      />
    </Routes>
  );
};

export default App;
