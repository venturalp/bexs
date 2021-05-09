import React from 'react'
import { InputBase } from './Form.InputBase'
import {
  InputErrorMessage,
  InputContainerStyle,
} from './Form.InputContainer.style'

export const InputContainer = ({
  error,
  children,
  placeholder,
  fullWidth,
  className,
  customLabel,
  ...props
}) => (
  <InputContainerStyle className={className} fullWidth={fullWidth}>
    <InputBase
      placeholder={placeholder}
      customLabel={customLabel}
      fullWidth={fullWidth}
      {...props}
      {...children.props}
    >
      {children}
    </InputBase>
    <InputErrorMessage>{error}</InputErrorMessage>
  </InputContainerStyle>
)
