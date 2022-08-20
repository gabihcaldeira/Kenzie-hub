import styled from "styled-components";

export const Section = styled.section`
  margin: 50px 0;

  nav {
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  width: 90%;
  max-width: 450px;
  height: fit-content;
  margin: auto;
  padding: 25px 18px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: var(--grey-3);
  border-radius: 5px;

  font-size: 0.87rem;

  @media (min-width: 700px) {
    padding: 25px 35px;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0px auto 40px;
  }

  label {
    width: 100%;
    margin: 0 auto 10px;
    text-align: left;
  }

  input,
  select {
    width: 100%;
    height: 40px;
    margin: 0 auto 35px;
    padding: 0 16px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    border-radius: 5px;
    border: 2px solid white;
    opacity: 0.5;
  }

  select {
    margin-bottom: 15px;
    -webkit-appearance: none;
  }

  input[name="name"] {
    border: 2px solid
      ${({ errors }) => (errors.name ? "var(--negative)" : "var(--grey-0)")};
  }

  input[name="email"] {
    background-color: var(--grey-2);
    color: var(--grey-0);
    border: 2px solid
      ${({ errors }) => (errors.email ? "var(--negative)" : "var(--grey-0)")};
  }

  input[name="password"] {
    border: 2px solid
      ${({ errors }) => (errors.password ? "var(--negative)" : "var(--grey-0)")};
  }

  input[name="confirm_password"] {
    border: 2px solid
      ${({ errors }) =>
        errors.confirm_password ? "var(--negative)" : "var(--grey-0)"};
  }

  input[name="bio"] {
    border: 2px solid
      ${({ errors }) => (errors.bio ? "var(--negative)" : "var(--grey-0)")};
  }

  input[name="contact"] {
    border: 2px solid
      ${({ errors }) => (errors.contact ? "var(--negative)" : "var(--grey-0)")};
  }

  input::placeholder {
    color: var(--grey-1);
  }

  input:focus {
    opacity: 1;
    background: var(--grey-2);
  }

  button {
    width: 100%;
    height: 40px;
    margin: 10px auto 0;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-0);
    background-color: var(--grey-1);
  }

  button[type="submit"] {
    background-color: var(--color-primary);
  }

  span {
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--grey-1);
    margin: 30px auto 10px;
  }

  .errorMsg {
    width: 100%;
    position: absolute;
    color: var(--negative);
    font-size: 0.65rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 30px;
    padding: 0 20px;
    left: 0;
  }

  @media (min-width: 700px) {
    .errorMsg {
      padding: 0 37px;
    }
  }
  .errorMsg-name {
    top: 160px;
  }

  .errorMsg-email {
    top: ${({ formType }) => (formType === "login" ? "160px" : "262px")};
  }

  .errorMsg-password {
    top: ${({ formType }) => (formType === "login" ? "265px" : "365px")};
  }

  .errorMsg-confirmPassword {
    top: 468px;
  }

  .errorMsg-bio {
    top: 572px;
  }

  .errorMsg-contact {
    top: 675px;
  }
`;
