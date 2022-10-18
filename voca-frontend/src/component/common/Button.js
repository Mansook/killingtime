import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;

  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: white;
  &:hover {
    background: gray;
  }
`;
const Button = (props) => <StyledButton style={{ margin: "2px" }} {...props} />;

export default Button;
