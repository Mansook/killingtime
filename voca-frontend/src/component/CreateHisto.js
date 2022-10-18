import React from "react";
import Modal from "./Modal";
import styled from "styled-components";
import "../css/histo.css";
const CreateHisto = (mode) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className={mode ? "visible" : "unvisible"}
    >
      <Modal />
    </div>
  );
};

export default CreateHisto;
