import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: fixed;
  z-index: 1;

  .logo {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.main.accent};
    letter-spacing: 5px;
    margin: 0;

    span {
      color: blue;
    }
  }

  .nav-toggle {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    z-index: 1000;
    padding: 2rem 1rem;
  }

  .hamburger {
    display: block;
    position: relative;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    background-color: ${({ theme }) => theme.main.accent};
    width: 30px;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0rem;
  }

  .hamburger::before {
    top: 10px;
  }
  .hamburger::after {
    bottom: 10px;
  }

  .nav-open .nav-list {
    transform: translateX(0);
  }

  .nav-open .hamburger,
  .nav-open .hamburger::before,
  .nav-open .hamburger::after {
    background: ${({ theme }) => theme.main.accent};
  }

  .nav-open .nav-toggle {
    position: fixed;
  }

  .nav-open .hamburger {
    transform: rotate(0.625turn);
  }

  .nav-open .hamburger::before {
    transform: rotate(90deg) translateX(-10px);
  }

  .nav-open .hamburger::after {
    opacity: 0;
  }
`;
