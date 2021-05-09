import { InputContainerStyle } from 'Commons/form/Form.InputContainer.style'
import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 53px 64px 50px 24%;
  width: 100%;
  background-color: #fff;
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
    text-align: right;
    width: 100%;
    margin-top: 20px;
  }
  header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 64px;
  }
`
export const CVVInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: ${props => props.theme.disabledColor};
    height: 17px;
    margin-left: 5px;
  }
`
