import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --gray-simple: #353333;
    --black-simple: #1F1E1E;
    --white-simple: #ffff;
  }

  body{
    background: var(--black-simple);
    color: var(--white-simple);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button{
    cursor: pointer;
  }

`

export default GlobalStyles
