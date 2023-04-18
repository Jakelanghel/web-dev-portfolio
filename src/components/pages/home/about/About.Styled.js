import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin: 0 auto;
  padding-top: 3rem;

  h2 {
    max-width: 400px;
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

  .container-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 3rem;
  }
`;
