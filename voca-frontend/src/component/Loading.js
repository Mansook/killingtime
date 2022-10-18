import React from "react";
import { Oval } from "react-loader-spinner";
const Loading = () => {
  return (
    <div
      style={{
        background: "black",
        opacity: "0.3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Oval
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      ></Oval>
    </div>
  );
};

export default Loading;
