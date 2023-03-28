import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  #__next {
    width: 100%;
  }

  /* clears the 'X' from Internet Explorer */
  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

  /* clears the 'X' from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    min-width: 320px;
    width: 100%;
    min-height: 100vh;
  }
`;
export default GlobalStyles;
