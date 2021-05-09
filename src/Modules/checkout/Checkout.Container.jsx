import React, { useState } from 'react'
import styled from 'styled-components'
import { CheckoutForm } from './Checkout.CheckoutForm'
import { CheckoutNav } from './Checkout.CheckoutNav'

const CheckoutContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 34% 66%;
`

export const CheckoutContainer = () => {
  const [cardInfo, setCardInfo] = useState({
    isFront: true,
    cardNumber: '',
    cvv: '',
  })

  return (
    <CheckoutContainerWrapper>
      <CheckoutNav cardInfo={cardInfo} />
      <CheckoutForm
        updateCardInfo={info => {
          setCardInfo({ ...cardInfo, ...info })
        }}
      />
    </CheckoutContainerWrapper>
  )
}
