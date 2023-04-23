import styled from "styled-components";

export const StyledCodeLine = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1.25rem;

  @media screen and (min-width: 900px) {
    margin-top: 2rem;
  }
`;
