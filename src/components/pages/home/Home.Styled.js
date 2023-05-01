import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  height: 100%;

  .animated,
  .static {
    margin: 0 auto;
  }

  .animated {
    padding-top: 2.25rem;
  }

  @media screen and (min-width: 800px) {
    padding-top: 2rem;

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      position: relative;
      padding: 0 1rem;
    }

    .static {
      margin: 0;
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1100px) {
    .container {
      /* max-width: 95%; */
      gap: 5rem;
    }
  }
`;
