import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  max-width: ${props => props.theme.screens.desktop}px;
  margin: 0 auto;
`

export const Container = ({ children, className }) => (
  <ContainerWrapper className={className}>{children}</ContainerWrapper>
)
