import styled from 'styled-components'

const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${props => props.fullWidth && 'width: 100%'}
`

const InputErrorMessage = styled.p`
  color: ${props => props.theme.error};
`

export { InputContainerStyle, InputErrorMessage }
