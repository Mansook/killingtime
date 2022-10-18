import React from "react";
import { useDispatch } from "react-redux";
import { onAnswerChange } from "../../modules/slices/test";

const TestWordCard = ({ word }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: "5px",
        width: "200px",
      }}
    >
      <div style={{ fontSize: "1rem" }}>{word.english}</div>
      <div>
        <input
          style={{
            width: "170px",
            height: "25px",
            fontSize: "1rem",
            border: "0.2px solid gray",
            margin: "5px 0px",
          }}
          placeholder="한글"
          onChange={(e) =>
            dispatch(
              onAnswerChange({
                english: word.english,
                input: e.target.value,
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default TestWordCard;
