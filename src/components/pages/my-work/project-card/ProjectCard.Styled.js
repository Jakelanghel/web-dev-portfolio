import styled from "styled-components";

export const StyledProjectCard = styled.div`
  width: 95%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.main.secondaryBG};

  border-radius: 15px;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.main.accent};
  }

  a span {
    display: block;
  }

  .container-project:hover {
    cursor: pointer;
  }

  .project-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 10px;
    border-radius: 15px;
    margin-bottom: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  h2 {
    color: ${({ theme }) => theme.syntax.lightGray};

    font-size: 1.25rem;
    padding: 0.25rem 0;
  }

  .container-tech {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    p,
    button {
      width: 50%;
    }
  }

  .tech-name {
    font-size: 1rem;
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.main.accent};
  }

  .more-info-btn {
    font-weight: 700;
    color: ${({ theme }) => theme.syntax.lightGray};

    border: none;
    border-radius: 5px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }

  .drop-down-arrow {
    width: 10px;
    filter: ${({ theme }) => theme.main.accentFilter};
  }

  .container-links {
    display: flex;
    justify-content: space-between;
  }

  .site-link,
  .repo-link {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-accent);
    letter-spacing: 1px;
    border: solid 2px var(--dark-accent);
    background-color: var(--dark-accent);
    border-radius: 5px;
    padding: 1rem 0;
    margin: 0 auto;
    margin-top: 1rem;
    color: white;
  }

  .repo-link:hover {
    cursor: pointer;
  }
`;
