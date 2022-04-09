import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --gray-simple: #353333;
    --black-simple: #1F1E1E;
    --white-simple: #ffff;
    --purple-simple: #673AB7;
    --blue-simple: #61DAFB;

    // Spaces
    --space-lang: 1400px;
    --space-short: 700px;

    // Fonts
    --font-title: 4em;
    --font-medium: 1.5em;
  }

  body{
    font-family: 'Signika', sans-serif;
    background: rgb(42,41,40);
    background: linear-gradient(90deg, rgba(42,41,40,1) 0%, rgba(12,11,13,1) 50%, rgba(42,41,40,1) 100%);
    color: var(--white-simple);
    margin: 50px;
  }

  h1{
    font-family: 'Poiret One', cursive;
  }

  span{
    color: var(--blue-simple);
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
