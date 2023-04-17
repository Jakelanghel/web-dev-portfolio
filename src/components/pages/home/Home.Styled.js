import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  height: 100%;

  button {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--dark-accent);
    background-color: transparent;
    border: solid 3px var(--dark-accent);
    border-radius: 10px;
    padding: 1rem 2rem;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;

  }

  @media screen and (min-width: 400px) {
    .container-stx {
      font-size: 18px;
    }

    .line-indent-1 {
      margin-left: 1.75rem;
    }

    .line-indent-2 {
      margin-left: 3.75rem;
    }
  }

  @media screen and (min-width: 650px) {
    .container-stx {
      font-size: 1.25rem;
      margin-left: 0.75rem;
    }

    .line-indent-1 {
      margin-left: 3rem;
    }

    .line-indent-2 {
      margin-left: 5.5rem;
    }
  }

  @media screen and (min-width: 900px) {
    .container-stx {
      font-size: 1.35rem;
      margin-left: 0.85rem;
    }

    .line-indent-1 {
      margin-left: 3.5rem;
    }

    .line-indent-2 {
      margin-left: 6rem;
    }
  }
`;
