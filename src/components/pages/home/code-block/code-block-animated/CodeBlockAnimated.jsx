import React from "react";
import { StyledCodeBlock } from "../code-styled/CodeBlock.Styled.js.js";
import { codeData } from "../code-data/codeData.js";
import Typewriter from "./typewriter/Typewriter.jsx";
import { StyledCodeLine } from "../code-styled/CodeLine.Styled.js";

const CodeBlockAnimated = () => {
  const lineElements = codeData.map((lineData, i) => {
    const line = lineData.map((data, i) => {
      if (data.multi) {
        return (
          <div key={i} className={`container-stx ${data.class}`}>
            <Typewriter
              multi={true}
              txtColor={data.txtColor}
              startDelay={data.startDelay}
            />
          </div>
        );
      } else {
        return (
          <div key={i} className={`container-stx ${data.class}`}>
            <Typewriter
              txt={data.txt}
              txtColor={data.txtColor}
              startDelay={data.startDelay}
            />
          </div>
        );
      }
    });

    return <StyledCodeLine key={i}>{line}</StyledCodeLine>;
  });

  return <StyledCodeBlock>{lineElements}</StyledCodeBlock>;
};

export default CodeBlockAnimated;
