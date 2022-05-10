import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    padding: 0;
    margin: 0;
    box-shadow: none;
    border: none;
    box-sizing: border-box;
    background: none;
    outline: none;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  a, button {
    cursor: pointer;
  }
`;
