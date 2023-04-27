import TypeWriterEffect from "react-typewriter-effect";
import React, { useState } from "react";
import { getFontSize } from "./getFontSize";

const Typewriter = (props) => {
  // const [fontSize, setFontSize] = useState();
  const fontSize = getFontSize();
  console.log(fontSize);
  // const fontSize = "1rem";
  if (props.multi) {
    return (
      <div className="container-stx">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "IBM Plex Mono",
            color: props.txtColor,
            fontWeight: 700,
            fontSize: `${fontSize}`,
          }}
          startDelay={props.startDelay}
          cursorColor="transparent"
          multiText={[
            "< Responsive_Apps />",
            "< Creative_Designs />",
            "< Beautiful_Websites />",
          ]}
          multiTextDelay={500}
          hideCursorAfterText={false}
          typeSpeed={30}
          className="container-stx-static"
        />
      </div>
    );
  } else {
    return (
      <div className="container-stx">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "IBM Plex Mono",
            display: "flex",
            color: props.txtColor,
            fontSize: `${fontSize}`,
          }}
          startDelay={props.startDelay}
          cursorColor="transparent"
          text={props.txt}
          typeSpeed={50}
          hideCursorAfterText={true}
          className="container-stx"
        />
      </div>
    );
  }
};

export default Typewriter;
