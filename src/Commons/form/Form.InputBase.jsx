/* eslint-disable operator-linebreak */
import { ClickOutside } from 'Commons/containers/Containers.ClickOutside'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const InputHolder = styled(ClickOutside)`
  position: relative;
  margin-top: 12px;
  ${props => props.fullWidth && 'width: 100%;'}
  ${props =>
    props.fullWidth &&
    css`
      input,
      select,
      textarea {
        width: 100%;
      }
    `}
`

const Label = styled.div`
  white-space: nowrap;
  color: ${props => props.theme.disabledColor};
  font-size: ${props => props.theme.pxToRem(17)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left top;
  transition: all 0.1s linear;
  pointer-events: none;
  ${props =>
    (props.hasContent || props.isFocused) &&
    css`
      transform: scale(0.7) translateY(-100%);
      top: 0;
    `}
`

export const InputBase = ({
  placeholder,
  customLabel,
  fullWidth,
  children,
  ...props
}) => {
  const inputRef = useRef()
  const [hasContent, setHasContent] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = e => {
    setHasContent(!!e?.currentTarget?.value)
  }

  useEffect(() => {
    setHasContent(!!inputRef?.current?.value)
  }, [customLabel, inputRef?.current?.value])

  return (
    <InputHolder
      onFocus={() => setIsFocused(true)}
      onClickOutside={() => setIsFocused(false)}
      fullWidth={fullWidth}
    >
      <Label hasContent={hasContent} isFocused={isFocused}>
        {customLabel || placeholder}
      </Label>
      {React.cloneElement(children, {
        ...children.props,
        ref: inputRef,
        onChange: handleChange,
        onFocus: () => setIsFocused(true),
        ...props,
      })}
    </InputHolder>
  )
}
