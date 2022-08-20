import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  height: fit-content;
  margin: auto;

  @media (min-width: 760px) {
    width: 70%;
  }

  .section__header {
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section__header > h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  .section__header > button {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    background-color: var(--grey-3);
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: background-color 0.8s ease-in-out;
  }

  .section__header > button:hover {
    background-color: var(--grey-2);
  }
`;

export const TagUl = styled.ul`
  width: 100%;
  height: 470px;
  background-color: var(--grey-3);
  border-radius: 5px;
  padding: 10px 8px;
  overflow-y: auto;

  @media (min-width: 760px) {
    padding: 10px 22px;
  }
`;
