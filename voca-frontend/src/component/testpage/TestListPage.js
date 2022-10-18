import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readtest, selectTestList } from "../../modules/slices/testlist";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const Slotdiv = styled.div`
  width: 30%;
  height: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;
const TestSlot = ({ test, id }) => {
  const navigate = useNavigate();
  let cor = 0,
    fail = 0;

  test.data.map((q) => (q.correct === true ? cor++ : fail++));
  return (
    <Slotdiv
      onClick={() => navigate(id)}
      style={{ background: fail === 0 ? "rgb(195, 255, 195)" : "" }}
    >
      {test._id}
      <div>
        {cor}/{cor + fail};
      </div>
    </Slotdiv>
  );
};
const TestListPage = ({ testlist }) => {
  return (
    <div>
      {testlist.map((hi) => (
        <TestSlot key={hi._id} test={hi} id={hi._id} />
      ))}
    </div>
  );
};

export default TestListPage;
