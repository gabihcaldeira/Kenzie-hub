import styled from "styled-components";

export const HeaderMain = styled.header`
  width: 100%;
  height: 118px;
  border-top: 2px solid var(--grey-3);
  border-bottom: 2px solid var(--grey-3);

  div {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    margin: auto;
  }

  @media (min-width: 760px) {
    div {
      flex-direction: row;
      width: 70%;
      align-items: center;
      justify-content: space-between;
      gap: 0;
    }
  }

  h1 {
    font-size: 1.12rem;
    font-weight: 700;
  }

  p {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--grey-1);
  }
`;
