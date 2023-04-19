import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin: 0 auto;
  padding-top: 3rem;

  h2 {
    font-size: 3rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--dark-accent);
    margin-bottom: 1rem;
  }

  .about-body {
    margin: 0 auto;
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 2rem;
    letter-spacing: 1px;
    color: var(--whiteish);
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 0;
    padding-left: 5rem;

    .about-body {
      max-width: 550px;
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 4rem;
    }
  }
`;
