import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  position: relative;
  margin: 0 auto;
  padding-top: 3rem;

  h1 {
    max-width: 450px;
    margin: 0 auto;
    font-size: 3.5rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--dark-accent);
    margin-bottom: 1rem;
  }

  .about-body {
    max-width: 450px;
    margin: 0 auto;
    font-size: 1.35rem;
    font-weight: 300;
    line-height: 2rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.main.txt1};
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) {
    width: 45%;
    text-align: left;
    padding-top: 0;
    margin: 0;

    h1 {
      margin: 0;
    }

    .about-body {
      margin: 0;
      margin-bottom: 1rem;
    }
  }
`;
