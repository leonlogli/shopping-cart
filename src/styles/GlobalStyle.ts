import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
  }

  html,
  body {
    overflow-x: hidden;
  }

  /* clear cross button on input */

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  /** Material input */
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }

  
/* Change the input autofill colors in webkit browsers */

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`

export { GlobalStyle }
export default GlobalStyle
