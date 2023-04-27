import { StyledCodeLine } from "../code-styled/CodeLine.Styled";
import { StyledCodeBlock } from "../code-styled/CodeBlock.Styled.js.js";
import { codeData } from "../code-data/codeData";

import React from "react";

const CodeBlockStatic = () => {
  const codeLines = codeData.map((lineData, i) => {
    const line = lineData.map((data, i) => {
      const txt = data.multi ? "< Beautiful_Websites />" : data.txt;
      return (
        <div key={i} className={`container-stx-static ${data.class}`}>
          <span
            className={"container-stx-static"}
            style={{ color: data.txtColor }}
          >
            {txt}
          </span>
        </div>
      );
    });
    return <StyledCodeLine key={i}>{line}</StyledCodeLine>;
  });
  return <StyledCodeBlock>{codeLines}</StyledCodeBlock>;
};

export default CodeBlockStatic;
