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
      margin: 0 auto;
      display: flex;
      justify-content: center;
      position: relative;
    }

    .static {
      margin: 0;
    }
  }

  @media screen and (min-width: 1100px) {
    .container {
      max-width: 95%;
      gap: 5rem;
    }
  }
  @media screen and (min-width: 1300px) {
    .container {
      gap: 7rem;
    }
  }
`;
