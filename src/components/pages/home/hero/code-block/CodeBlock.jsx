import React from "react";
import { StyledCodeContainer } from "./containers/CodeContainer";
import { codeData } from "./code-data/codeData";
import { getCodeBlock } from "./getCodeBlock";

const CodeBlock = () => {
  const codeLines = getCodeBlock(codeData);

  return <StyledCodeContainer>{codeLines}</StyledCodeContainer>;
};

export default CodeBlock;
