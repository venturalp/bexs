import React from 'react'
import styled from 'styled-components'
import { CheckoutNav } from './Checkout.CheckoutNav'

const CheckoutContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  & nav {
    padding-top: 53px;
    padding-bottom: 30%;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 16%,
      ${props => props.theme.mainColor} 16%
    );
    color: ${props => props.theme.textContrast};
    padding-left: 14%;
  }
`

export const CheckoutContainer = () => {
  console.log('')

  return (
    <CheckoutContainerWrapper>
      <CheckoutNav />
      <div>Teste</div>
    </CheckoutContainerWrapper>
  )
}
