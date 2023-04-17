import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;

  .logo {
    font-size: 1.5rem;
    color: var(--dark-accent);
    letter-spacing: 5px;
    margin: 0;

    span {
      color: blue;
    }
  }

  .nav-toggle {
    background: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    z-index: 1000;
    padding: 2rem;
  }

  .hamburger {
    display: block;
    position: relative;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    background-color: var(--dark-accent);
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
    background: var(--dark-accent);
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
