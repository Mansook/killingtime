import React from "react";

const Footer = ({ text }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        background: "gray",
      }}
    >
      {text}
    </div>
  );
};

export default Footer;
