import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
