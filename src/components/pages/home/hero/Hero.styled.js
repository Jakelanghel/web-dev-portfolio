import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .my-work-btn {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.main.accent};
    background-color: transparent;
    border: solid 3px ${({ theme }) => theme.main.accent};
    border-radius: 10px;
    padding: 1rem 2rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }

  .container-arrow {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .arrow {
    width: 150px;
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    width: 45%;
    max-width: 450px;
    min-height: none;
    margin-left: auto;
    min-height: 80vh;
    justify-content: flex-start;

    .my-work-btn {
      margin-top: 5rem;
    }

    .container-code {
      display: flex;
      justify-content: flex-end;
    }

    .container-arrow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }

    .arrow {
      width: 150px;
    }
  }
`;
