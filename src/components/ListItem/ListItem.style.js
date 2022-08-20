import styled from "styled-components";

export const TagLi = styled.li`
  width: 100%;
  height: 48px;
  background-color: var(--grey-4);
  border-radius: 4px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 22px;
  cursor: pointer;

  h4 {
    width: 20ch;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.87rem;
    font-weight: 700;
  }

  @media (min-width: 760px) {
    h4 {
      width: 60%;
    }
  }

  div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
  }

  div > p {
    font-size: 0.75rem;
    color: var(--grey-1);
  }

  div > .trash__icon {
    display: none;
    background: none;
    color: var(--grey-1);
    font-size: 1.1rem;
    transition: color 0.8s ease-in-out;
  }

  div > .trash__icon:hover {
    color: var(--grey-0);
  }

  @media (min-width: 760px) {
    div > .trash__icon {
      display: inline;
    }
  }
`;
