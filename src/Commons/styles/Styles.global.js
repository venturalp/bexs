import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    p, h1, h2, h3, h4, h5 {
      padding: 0;
      margin: 0;
    }
    & input, & select {
      border: 0;
      color: ${props => props.theme.text};
      appearance: none;
      border-bottom: 1.5px solid ${props => props.theme.disabledColor};
      font-size: ${props => props.theme.pxToRem(17)};
      padding: 5px 0px;
      option {
        color: ${props => props.theme.text};
      }
      &:focus {
        outline: none;
      }
    }
  }
`
