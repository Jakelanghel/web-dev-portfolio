import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  min-height: 100%;

  @media screen and (min-width: 800px) {
    .home-content {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      justify-content: center;
    }
  }
`;
