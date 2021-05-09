import { createGlobalStyle } from 'styled-components'
import ArrowDown from 'Assets/arrow-down.png'

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
    select {
      background-image: url('${ArrowDown}');
      background-repeat: no-repeat;
      background-position: right 6px center;
      background-size: 18px;
    }
    button {
      background-color: ${props => props.theme.mainColor};
      color: ${props => props.theme.textContrast};
      text-transform: uppercase;
      padding: 15px 20px;
      min-width: 246px;
      font-size: ${props => props.theme.pxToRem(17)};
      line-height: ${props => props.theme.pxToRem(22)};
      border-radius: 10px;
      appearance: none;
      border: 0;
      cursor: pointer;
      &:focus {
        outline: none;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
      }
    }
  }
`
