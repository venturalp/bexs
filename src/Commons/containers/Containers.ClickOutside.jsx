import React, { useRef, useEffect } from 'react'

export const ClickOutside = ({
  children,
  onClickOutside,
  useEscapeKey = false,
  className,
}) => {
  const outRef = useRef()

  const handleClickOutside = e => {
    if (outRef.current && !outRef.current.contains(e.target)) {
      onClickOutside()
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Escape') onClickOutside()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    if (useEscapeKey) document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (useEscapeKey) document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div ref={outRef} className={className}>
      {children}
    </div>
  )
}
