import React from "react";
import { StyledCodeBlock } from "./CodeBlock.Styled.js";
import { codeData } from "./code-data/codeData";
import { getCodeLines } from "./code-lines/getCodeLines.jsx";

const CodeBlock = () => {
  const codeLines = getCodeLines(codeData);

  return <StyledCodeBlock>{codeLines}</StyledCodeBlock>;
};

export default CodeBlock;
