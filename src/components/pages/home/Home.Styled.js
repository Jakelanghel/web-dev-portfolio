import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  height: 100%;

  .animated,
  .static {
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    padding-top: 2rem;

    .container {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      justify-content: center;
      position: relative;
    }

    .static {
      margin: 0;
    }
  }
`;
