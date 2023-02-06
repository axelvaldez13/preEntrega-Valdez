import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height:100%;
    scroll-behavior: smooth;
    font-family: 'Montserrat Alternates', sans-serif;
    background:white;
  }
  body, #root{
    display: flex;
    flex-direction:column;
    flex:1;
  }
`
