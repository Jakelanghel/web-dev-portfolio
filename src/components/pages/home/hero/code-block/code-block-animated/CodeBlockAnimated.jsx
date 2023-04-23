import React from "react";
import { StyledCodeBlock } from "../shared/CodeBlock.Styled.js.js";
import { codeData } from "../code-data/codeData.js";
import Typewriter from "./typewriter/Typewriter.jsx";
import { StyledCodeLine } from "../shared/CodeLine.Styled.js";

const CodeBlock = (props) => {
  const lineElements = codeData.map((lineData, i) => {
    const line = lineData.map((data, i) => {
      if (data.multi) {
        return (
          <div className={`container-stx ${data.class}`} key={i}>
            <Typewriter
              multi={true}
              txtColor={data.txtColor}
              startDelay={data.startDelay}
            />
          </div>
        );
      } else {
        return (
          <div className={`container-stx ${data.class}`} key={i}>
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

export default CodeBlock;
