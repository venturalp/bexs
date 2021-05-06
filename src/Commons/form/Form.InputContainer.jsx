import React from 'react'
import { Input } from './Form.InputBase'
import {
  InputErrorMessage,
  InputContainerStyle,
} from './Form.InputContainer.style'

export const InputContainer = ({ error, children, placeholder }) => (
  <InputContainerStyle>
    <Input placeholder={placeholder} {...children.props}>
      {children}
    </Input>
    <InputErrorMessage>{error}</InputErrorMessage>
  </InputContainerStyle>
)
