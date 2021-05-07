/* eslint-disable operator-linebreak */
import { ClickOutside } from 'Commons/container/Container.ClickOutside'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const InputHolder = styled(ClickOutside)`
  position: relative;
  margin-top: 12px;
`

const Label = styled.div`
  white-space: nowrap;
  color: ${props => props.theme.disabledColor};
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

export const Input = ({ placeholder, customLabel, children }) => {
  const inputRef = useRef()
  const [hasContent, setHasContent] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = e => {
    setHasContent(!!e.currentTarget.value)
  }

  useEffect(() => {
    console.log(customLabel)
    setHasContent(!!inputRef?.current?.value)
  }, [inputRef?.current?.value])

  return (
    <InputHolder
      onFocus={() => setIsFocused(true)}
      onClickOutside={() => setIsFocused(false)}
    >
      <Label hasContent={hasContent} isFocused={isFocused}>
        {customLabel || placeholder}
      </Label>
      {React.cloneElement(children, {
        ...children.props,
        ref: inputRef,
        onChange: handleChange,
        onFocus: () => setIsFocused(true),
      })}
    </InputHolder>
  )
}
