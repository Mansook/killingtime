import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        top: "0",
        height: "60px",
        width: "100%",
        background: "gray",

        display: "flex",
        alignItems: "center",
      }}
    >
      <div>WORD</div>
      <div>{text}</div>
    </div>
  );
};

export default Header;
