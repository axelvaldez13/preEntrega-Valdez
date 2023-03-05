import { createGlobalStyle } from 'styled-components'
import theme from '@styles/Theme'

export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-size: 16px;
    height:100%;
    scroll-behavior: smooth;
    font-family: 'Montserrat Alternates', sans-serif;
    background:${theme.color.gray[800]};
  }
  body, #root{
    display: flex;
    flex-direction:column;
    flex:1;
  }
`
