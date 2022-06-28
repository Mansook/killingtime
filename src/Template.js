import React from "react";
import Button from "./components/Button";
import Inputs from "./components/Inputs";
import Read from "./components/Read";
import Test from "./components/Test";
import { useState } from "react";

const PrintPage = (pages) => {
  if (pages === 1) {
    return <Read />;
  } else if (pages === 0) {
    return <Inputs />;
  } else {
    return <Test />;
  }
};
const Template = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", margin: "10px" }}>
        <Button
          onClick={() => {
            setPage(0);
          }}
        >
          단어 입력하기
        </Button>
        <Button
          onClick={() => {
            setPage(1);
          }}
        >
          단어 보기
        </Button>
        <Button
          onClick={() => {
            setPage(2);
          }}
        >
          단어 시험보기
        </Button>
      </div>
      <div>{PrintPage(page)}</div>
    </div>
  );
};
export default Template;
