import React from 'react'
import styled from 'styled-components'

import { CheckoutContainer } from 'Modules/checkout/Checkout.Container'
import { CartContainer } from 'Modules/cart/Cart.Container'
import { TemplateMaster } from 'Commons/templates/Templates.TemplateMaster'
import { Container } from 'Commons/containers/Containers.Container'

const HomeContainer = styled(Container)`
  display: grid;
  margin: 0 auto;
  margin-top: 65px;
  grid-template-columns: 70% 30%;
  grid-column-gap: 15px;
  & > div {
    min-height: 0px;
    min-width: 0px;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: 1024px 3fr;
    max-width: 1366px;
  }
`

export const HomePage = () => (
  <TemplateMaster>
    <HomeContainer>
      <CheckoutContainer />
      <CartContainer />
    </HomeContainer>
  </TemplateMaster>
)
