import React from 'react'
import styled from 'styled-components'
import Arrow from 'Assets/arrow.svg'
import { CheckoutContainer } from 'Modules/checkout/Checkout.Container'

const HomeContainer = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 96%;
  margin-top: 65px;
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 15px;
  & > div {
    background-color: #fff;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: 1024px 3fr;
    max-width: 1366px;
  }
`

const CvvInfo = styled(Arrow)`
  fill: red;
  width: 24px;
  height: 24px;
`

export const HomePage = () => (
  <HomeContainer>
    <CheckoutContainer />
    <div>resumo</div>
  </HomeContainer>
)
