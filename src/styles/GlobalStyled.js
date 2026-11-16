import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onSurface};
  }

  button,
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;