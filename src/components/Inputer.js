import React, { useRef } from "react";
import styled from "styled-components";

const StyledInputer = styled.input`
  height: 30px;
  width: 150px;
  font-size: 1rem;
  border-radius: 4px;
  border: 0.5px black solid;
  cursor: pointer;
  background: white;
`;

const Inputer = React.forwardRef((props, ref) => (
  <StyledInputer ref={ref} style={{ margin: "2px" }} {...props} />
));
export default Inputer;
