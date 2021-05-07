import React from 'react'
import { Input } from './Form.InputBase'
import {
  InputErrorMessage,
  InputContainerStyle,
} from './Form.InputContainer.style'

export const InputContainer = ({
  error,
  children,
  placeholder,
  customLabel,
}) => (
  <InputContainerStyle>
    <Input
      placeholder={placeholder}
      customLabel={customLabel}
      {...children.props}
    >
      {children}
    </Input>
    <InputErrorMessage>{error}</InputErrorMessage>
  </InputContainerStyle>
)
