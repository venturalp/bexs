import { InputContainerStyle } from 'Commons/form/Form.InputContainer.style'
import styled, { css } from 'styled-components'

export const FormWrapper = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 100%;
    background-color: #fff;
    padding: 120px 4% 4%;
    ${InputContainerStyle} {
      margin-bottom: 40px;
    }
    .row {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 16px;
    }
    footer {
      text-align: center;
      width: 100%;
      margin-top: 20px;
      button {
        width: 100%;
      }
    }
    header {
      display: none;
    }
    @media screen and (min-width: ${theme.screens.tabletV}px) {
      footer {
        text-align: right;
        button {
          width: auto;
        }
      }
    }
    @media screen and (min-width: ${theme.screens.tablet}px) {
      padding: 53px 64px 50px 24%;
      header {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-bottom: 64px;
      }
    }
  `,
)
export const CVVInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: ${props => props.theme.disabledColor};
    height: 17px;
    margin-left: 5px;
  }
`
