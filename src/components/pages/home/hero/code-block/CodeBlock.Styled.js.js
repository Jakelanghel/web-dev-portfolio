import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCodeBlock = styled(motion.div)`
  min-height: 275px;
  min-width: 375px;
  margin: 0 auto;

  .container-stx {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .line-indent-1 {
    margin-left: 1.25em;
  }

  .line-indent-2 {
    margin-left: 2.75em;
  }

  @media screen and (min-width: 400px) {
    min-width: 400px;

    .container-stx {
      font-size: 1.15rem;
    }

    .line-indent-1 {
      margin-left: 2.5em;
    }

    .line-indent-2 {
      margin-left: 3em;
    }
  }

  @media screen and (min-width: 425px) {
    .line-indent-2 {
      margin-left: 5rem;
    }
  }

  /* @media screen and (min-width: 400px) {
    min-width: 385px;

    .container-stx {
      font-size: 1.15rem;
      margin-left: 0.5rem;
    }

    .line-indent-1 {
      margin-left: 1.25em;
    }

    .line-indent-2 {
      margin-left: 2.75em;
    }
  }

  @media screen and (min-width: 650px) {
    min-width: 425px;
    margin: 5rem auto;
  }

  @media screen and (min-width: 900px) {
    min-width: 525px;
    margin-bottom: 5rem;
  } */
`;
