import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Apercu Arabic Pro';
    background-color: #FAFAFA;
    overflow-x: hidden;
  }

  ::selection {
    color: black;
    opacity: 0.5;
    background: #FAD34F;
  }
`