import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unvisible } from "../modules/slices/booklist";
import selectLoading from "../modules/slices/loading";
const OutofModal = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(unvisible())}
      style={{
        position: "fixed",
        top: "0",
        background: "black",
        opacity: "0.7",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};

export default OutofModal;
