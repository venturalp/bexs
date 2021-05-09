import React from 'react'
import styled, { css } from 'styled-components'

const ContainerWrapper = styled.div(
  ({ theme }) => css`
    max-width: 96%;
    margin: 0 auto;
    @media screen and (min-width: ${theme.screens.smallDesktop}px) {
      max-width: ${theme.screens.smallDesktop}px;
    }
  `,
)

export const Container = ({ children, className }) => (
  <ContainerWrapper className={className}>{children}</ContainerWrapper>
)
