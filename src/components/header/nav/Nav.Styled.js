import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.syntax.black};
  padding-top: 10rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .nav-link {
    font-size: 2.25rem;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 300;
    color: ${({ theme }) => theme.syntax.lightGray};
    font-style: italic;
    padding: 1.5rem;
  }

  span {
    margin-right: 1rem;
  }
  .active {
    color: ${({ theme }) => theme.main.accent};
    font-weight: 500;

    span {
      opacity: 0;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 500px;
    position: static;
    flex-direction: row;
    background-color: transparent;
    padding-top: 0;

    .nav-link {
      font-size: 1.25rem;
      padding: 1.5rem;
    }
  }
`;
