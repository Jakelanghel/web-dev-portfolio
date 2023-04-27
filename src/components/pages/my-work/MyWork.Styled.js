import styled from "styled-components";

export const StyledMyWork = styled.main`
  width: 100%;

  .container-filter {
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.syntax.white};
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .filter-btn {
    width: 25%;
    font-size: 1rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.main.primaryBG};
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 25px;
  }

  .active {
    font-weight: 700;
    color: ${({ theme }) => theme.main.accent};
  }

  .container-projects {
    margin-top: 3rem;
  }

  @media screen and (min-width: 800px) {
    .container-projects {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;
