import styled from "styled-components";

export const NavBar = styled.nav`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.hasChildren ? "space-between" : "center"};
  margin: auto;

  > .Logo {
    color: var(--color-primary);
    font-size: ${({ hasChildren }) => (hasChildren ? "2rem" : "2.5rem")};
  }

  @media (min-width: 760px) {
    width: 70%;
  }

  button {
    font-weight: 600;
    font-size: 0.75rem;
    background-color: var(--grey-3);
    color: var(--grey-0);
    border-radius: 5px;
    padding: 5px 16px;
  }
`;
