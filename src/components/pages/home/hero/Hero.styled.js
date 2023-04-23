import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--dark-accent);
    background-color: transparent;
    border: solid 3px var(--dark-accent);
    border-radius: 10px;
    padding: 1rem 2rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }

  .arrow {
    width: 150px;
    height: auto;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) {
    width: 45%;
  }
`;
