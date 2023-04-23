import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;

  h2 {
    margin-bottom: 3rem;
    font-size: 3.5rem;
    color: ${({ theme }) => theme.main.accent};
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.syntax.white};
  }

  .container-flex {
    width: 80%;
    min-width: 350px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .container-skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-skill {
    width: 40%;
    margin-bottom: 2.5rem;
    border-radius: 10%;
  }

  .skill-img {
    width: 70%;
    max-width: 75px;
  }

  @media screen and (min-width: 900px) {
    margin: 0;
    padding-top: 12rem;

    h2 {
      font-size: 4rem;
    }

    .container-skill {
      width: 25%;
      margin-bottom: 2.5rem;
      border-radius: 10%;
    }

    .skill-img {
      max-width: 50px;
    }
  }
`;
