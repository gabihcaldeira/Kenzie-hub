import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-Focus: #d62b61;
    --color-primary-Negative: #59323f;
    
    --grey-4: #121214;
    --grey-4-50: #12121499;
    --grey-3: #212529;
    --grey-2: #343b41;
    --grey-1: #868e96;
    --grey-0: #F8F9FA;

    --success: #3FE864;
    --negative: #E83F5B;
    --warning: #e0ce00;

    --font: 'Inter', sans-serif;

    --toastify-color-dark: #212529;
    --toastify-toast-width: fit-content;
    --toastify-toast-min-height: 74px
}

h1,h2,h3,h4,h5, input, label, form, ul, ol, li, p, div, section, header, button, a, span{
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    background: none;
    border: none;

    box-sizing: border-box;
} 

input:focus{
    outline: none;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: var(--grey-2);
  border-radius: 2.5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

.Toastify__toast-container{
  min-width: 300px;
}

.toast__description{
  font-size: 0.85rem;
  margin-top: 5px;
}

.toast__deleteWarning{
  height: fit-content;
  align-items: center;
  padding: 6px 12px;
}

.toast__deleteWarning > .Toastify__toast-body > .Toastify__toast-icon{
  width: fit-content;
}

.toast__warning-icon{
  font-size: 40px;
  color: var(--warning);
}

.toast__warn-description{
  font-size: 0.85rem;
  font-style: italic;
  margin: 5px auto 10px;
}

.toast__warn-buttons{
  display: flex;
  justify-content: center;
}

.toast__warn-button{
  color: var(--grey-0);
  font-size: 1rem;
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color .8s ease-in-out;
}

.button-delete{
  background-color: var(--color-primary-Negative);
  margin-right: 15px;
}

.button-delete:hover{
background-color: var(--color-primary-Focus);
}

.button-cancel{
  background-color: var(--grey-2);
}

.button-cancel:hover{
  background-color: var(--grey-1);
}



`;
