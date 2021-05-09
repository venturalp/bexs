import { HeaderBase } from 'Commons/headers/Headers.HeaderBase'
import React from 'react'

export const TemplateMaster = ({ children }) => (
  <>
    <HeaderBase />
    {children}
  </>
)
