import styled from "styled-components";

export const StyledCodeContainer = styled.div`
  min-height: 300px;
  /* max-width: 400px; */
  padding: 1rem;

  margin: 3rem auto;
  margin-bottom: 5rem;
  border: solid 2px red;

  .container-stx {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .line-indent-1 {
    margin-left: 1.25em;
  }

  .line-indent-2 {
    margin-left: 2.75em;
  }

  @media screen and (min-width: 400px) {
    min-width: 385px;

    .container-stx {
      font-size: 1.15rem;
      margin-left: 0.5rem;
    }

    .line-indent-1 {
      margin-left: 1.25em;
    }

    .line-indent-2 {
      margin-left: 2.75em;
    }
  }

  @media screen and (min-width: 650px) {
    min-width: 425px;
    margin: 5rem auto;
  }

  @media screen and (min-width: 900px) {
    min-width: 525px;
    margin-bottom: 5rem;
  }
`;
