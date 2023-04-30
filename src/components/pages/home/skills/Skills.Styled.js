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
    text-align: center;
    font-size: 1.15rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.main.txt1};
  }

  .container-flex {
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .container-skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    margin-bottom: 2.5rem;
    border-radius: 10%;
    background-color: ${({ theme }) => theme.main.codeBg};
  }

  .skill-img {
    width: 75px;
  }

  .styled {
    width: 100px;
  }

  .mongo {
    width: 100px;
  }

  @media screen and (min-width: 800px) {
    margin: 0;
    padding-top: 5rem;
    padding-bottom: 10rem;

    h2 {
      font-size: 4rem;
    }

    .container-flex {
      padding: 2rem 0;
      gap: 2rem;
    }

    .container-skill {
      width: 25%;
    }

    .skill-img {
    }
  }
`;
