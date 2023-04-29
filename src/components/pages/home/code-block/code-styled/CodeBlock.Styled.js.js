import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCodeBlock = styled(motion.div)`
  min-height: 250px;
  width: 300px;
  margin: 0 auto;

  .container-stx,
  .container-stx-static {
    margin-left: 0.5rem;
    font-weight: 700;
    font-family: "IBM Plex Mono";
  }

  .container-stx-static {
    font-size: 1rem;
  }

  .static-multi {
    font-family: "IBM Plex Mono";
    font-weight: 700;
    font-size: 1rem;
  }

  .line-indent-1 {
    margin-left: 1.25em;
  }

  .line-indent-2 {
    margin-left: 2.75em;
  }

  @media screen and (min-width: 375px) {
    width: 350px;

    .container-stx,
    .container-stx-static {
      font-size: 1.15rem;
    }

    .line-indent-1 {
      margin-left: 1.75em;
    }

    .line-indent-2 {
      margin-left: 3em;
    }
  }

  @media screen and (min-width: 400px) {
    width: 385px;

    .container-stx,
    .container-stx-static {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 800px) {
    width: 375px;
    margin: 0;
    .container-stx,
    .container-stx-static {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 450px;

    min-height: 300px;

    .container-stx,
    .container-stx-static {
      font-size: 1.5rem;
    }
  }
`;
