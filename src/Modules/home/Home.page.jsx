import React from 'react'
import styled, { css } from 'styled-components'

import { CheckoutContainer } from 'Modules/checkout/Checkout.Container'
import { CartContainer } from 'Modules/cart/Cart.Container'
import { TemplateMaster } from 'Commons/templates/Templates.TemplateMaster'
import { Container } from 'Commons/containers/Containers.Container'

const HomeContainer = styled(Container)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
    grid-template-rows: auto;
    & > div {
      min-height: 0px;
      min-width: 0px;
      &:first-child {
        margin-bottom: 15px;
      }
    }
    @media screen and (min-width: ${theme.screens.smallDesktop}px) {
      display: grid;
      margin: 0 auto;
      margin-top: 65px;
      grid-template-columns: 70% 30%;
      grid-column-gap: 15px;
      grid-template-columns: 1024px 3fr;
      max-width: 1366px;
      & > div {
        &:first-child {
          margin-bottom: 0px;
        }
      }
    }
  `,
)

export const HomePage = () => (
  <TemplateMaster>
    <HomeContainer>
      <CheckoutContainer />
      <CartContainer />
    </HomeContainer>
  </TemplateMaster>
)
