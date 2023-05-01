import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  filter: ${(props) => props.filter};
  margin-top: auto;

  .container-footer-link {
    width: 50px;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    padding-top: 8rem;
  }
`;
