import React from "react";
import { WordBox } from "../bookpage/Word";
import { ListBox } from "../bookpage/WordList";

const TestWord = ({ word }) => {
  return (
    <div
      style={{
        margin: "5px",
        width: "200px",
      }}
      /*style={{
      background: word.correct ? "skyblue" : "red",
    }}*/
    >
      <div style={{ fontSize: "1.2rem" }}>{word.english}</div>
      <div
        style={{
          width: "170px",
          height: "25px",
          fontSize: "1rem",
          border: "0.2px solid gray",
          margin: "5px 0px",
          background: word.correct
            ? "rgb(195, 255, 195)"
            : "rgb(253, 201, 201)",
        }}
      >
        {word.input}
      </div>
      {word.correct ? <div /> : <div>{word.answer}</div>}
    </div>
  );
};

const TestHistoryPage = ({ data, testId }) => {
  return (
    <div
      style={{
        height: "1400px",

        width: "650px",
        marginTop: "70px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {data.map((w) => (
        <TestWord word={w} />
      ))}
    </div>
  );
};

export default TestHistoryPage;
