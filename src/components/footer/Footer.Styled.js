import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  filter: ${(props) => props.filter};

  .container-footer-link {
    width: 50px;
  }

  img {
    width: 100%;
  }
`;
