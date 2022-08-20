import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: var(--grey-4-50);

  .modal__content {
    width: 95%;
    max-width: 400px;
    height: 350px;
    max-height: fit-content;
    margin: 110px auto;

    background-color: var(--grey-3);
    border-radius: 8px;

    transition: margin 0.8s ease-in-out;
  }

  @media (min-width: 600px) {
    .modal__content {
      width: 90%;
      margin: 170px auto;
    }
  }

  .modal__header {
    width: 100%;
    height: 60px;
    padding: 0px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--grey-2);
    border-radius: 8px 8px 0px 0px;

    > h2 {
      font-size: 1rem;
    }

    > .modal__close {
      font-size: 1.5rem;
      color: var(--grey-1);
      cursor: pointer;
      transition: color 0.8s ease-in-out;
    }

    > .modal__close:hover {
      color: var(--grey-0);
    }
  }

  .modal__form {
    width: 100%;
    height: 290px;
    padding: 25px 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > label {
      font-size: 0.75rem;
      margin-bottom: 10px;
    }

    > input,
    select {
      width: 100%;
      height: 45px;
      font-size: 1.1rem;
      padding-left: 15px;
      margin-bottom: 20px;
      border: 1.5px solid var(--grey-0);
      border-radius: 4px;
      color: var(--grey-0);
      opacity: 0.5;
      transition: opacity 0.8s ease-in-out;
    }

    > select {
      background-color: var(--grey-3);
      -webkit-appearance: none;
    }

    > input:focus,
    select:focus {
      opacity: 1;
    }

    > input[name="title"] {
      border: 1.5px solid
        ${({ errors }) => (errors.title ? "var(--negative)" : "var(--grey-0)")};
    }

    > .errorMsg {
      color: var(--negative);
      font-size: 0.65rem;
      font-weight: 600;
      text-align: left;
      position: absolute;
      margin: 0 0 80px 5px;
    }

    > .errorMsg-fixed-title {
      color: transparent;
    }

    > .update__tech-title {
      opacity: 1;
    }

    > .update__tech-title:focus {
      border-color: var(--negative);
    }

    > .update__tech-title:focus + .errorMsg-fixed-title {
      color: var(--negative);
    }

    > .buttons {
      width: 100%;
    }

    > .buttons > button {
      height: 45px;
      color: var(--grey-0);
      border-radius: 4px;
      font-size: 1rem;
      margin-top: 10px;
      cursor: pointer;
      transition: background-color 0.8s ease-in-out;
    }

    @media (min-width: 760px) {
      font-size: 1.2rem;
    }
    > .buttons > .button__add {
      width: 100%;
      background-color: var(--color-primary);
    }

    > .buttons > .button__add:hover {
      background-color: var(--color-primary-Focus);
    }

    > .buttons > .button__save {
      width: 60%;
      margin-right: 5%;
      background-color: var(--color-primary-Negative);
    }

    > .buttons > .button__save:hover {
      background-color: var(--color-primary-Focus);
    }

    > .buttons > .button__delete {
      width: 35%;
      background-color: var(--grey-2);
    }

    > .buttons > .button__delete:hover {
      background-color: var(--grey-1);
    }
  }
`;
