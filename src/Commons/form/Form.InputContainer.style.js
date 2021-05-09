import styled from 'styled-components'

const InputErrorMessage = styled.p`
  color: ${props => props.theme.error};
  font-size: ${props => props.theme.pxToRem(13)};
  line-height: ${props => props.theme.pxToRem(22)};
`

const InputFeedbackMessage = styled(InputErrorMessage)`
  color: ${props => (props.success ? props.theme.success : props.theme.error)};
`

const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  ${props => props.fullWidth && 'width: 100%'};
  ${InputErrorMessage} {
    position: absolute;
    left: 0;
    top: 100%;
  }
`

export { InputContainerStyle, InputErrorMessage, InputFeedbackMessage }
