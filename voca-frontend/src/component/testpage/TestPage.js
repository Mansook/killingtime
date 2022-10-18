import React from "react";
import Button from "../common/Button";
import TestWordCard from "./TestWordCard";

const TestPage = ({ testBook, onSubmit }) => {
  return (
    <div
      style={{
        height: "1400px",
        width: "650px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {testBook.map((q) => (
        <TestWordCard key={q.english} word={q} />
      ))}

      <div>
        <Button onClick={onSubmit}>제출</Button>
      </div>
    </div>
  );
};

export default TestPage;
