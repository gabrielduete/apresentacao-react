import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --gray-simple: #353333;
    --black-simple: #1F1E1E;
    --white-simple: #ffff;
    --purple-simple; #673AB7;
  }

  body{
    font-family: 'Signika', sans-serif;
    background: var(--black-simple);
    color: var(--white-simple);
    margin: 50px;
  }

  h1{
    font-family: 'Poiret One', cursive;
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
