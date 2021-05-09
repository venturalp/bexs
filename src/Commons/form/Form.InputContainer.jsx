import React, { forwardRef, useMemo } from 'react'
import { InputBase } from './Form.InputBase'
import {
  InputErrorMessage,
  InputContainerStyle,
} from './Form.InputContainer.style'

export const InputContainer = forwardRef(
  (
    {
      error,
      children,
      placeholder,
      fullWidth,
      className,
      customLabel,
      ...props
    },
    ref,
  ) => (
    <InputContainerStyle className={className} fullWidth={fullWidth} ref={ref}>
      {useMemo(
        () => (
          <InputBase
            placeholder={placeholder}
            customLabel={customLabel}
            fullWidth={fullWidth}
            {...props}
            {...children.props}
          >
            {children}
          </InputBase>
        ),
        [placeholder, customLabel, fullWidth, props, children],
      )}
      <InputErrorMessage>{error}</InputErrorMessage>
    </InputContainerStyle>
  ),
)
