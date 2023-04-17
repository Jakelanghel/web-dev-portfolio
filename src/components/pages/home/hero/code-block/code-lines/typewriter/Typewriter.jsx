import TypeWriterEffect from "react-typewriter-effect";

import React from "react";

const Typewriter = (props) => {
  if (props.multi) {
    return (
      <TypeWriterEffect
        textStyle={{
          fontFamily: "IBM Plex Mono",
          color: props.txtColor,
          fontWeight: 700,
          fontSize: "1.2em",
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
      />
    );
  } else {
    return (
      <div className="container-stx">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "IBM Plex Mono",
            display: "flex",
            color: props.txtColor,
            fontSize: "1.25em",
          }}
          startDelay={props.startDelay}
          cursorColor="transparent"
          text={props.txt}
          typeSpeed={50}
          hideCursorAfterText={true}
        />
      </div>
    );
  }
};

export default Typewriter;
