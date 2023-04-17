import Typewriter from "./typewriter/Typewriter";
import { StyledCodeLine } from "./containers/CodeLine";

export const getCodeBlock = (codeData) => {
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
              className={data.class}
            />
          </div>
        );
      }
    });

    return <StyledCodeLine key={i}>{line}</StyledCodeLine>;
  });

  return lineElements;
};
