import React, { useMemo } from 'react'
import Arrow from 'Assets/arrow.svg'
import CardIcon from 'Assets/card-icon.svg'
import { FlipCard } from 'Commons/card/Card.FlipCard'
import {
  NavHolder,
  CheckoutBackLink,
  CheckoutTitle,
} from './Checkout.CheckoutNav.style'

export const CheckoutNav = ({ cardInfo }) => (
  <NavHolder>
    {useMemo(
      () => (
        <>
          <CheckoutBackLink>
            <Arrow width={15} />
            <p>Alterar forma de pagamento</p>
          </CheckoutBackLink>
          <CheckoutTitle>
            <div>
              <CardIcon />
            </div>
            <h1>Adicione um novo cartão de crédito</h1>
          </CheckoutTitle>
        </>
      ),
      [],
    )}
    <FlipCard isFront={cardInfo.isFront} {...cardInfo} />
  </NavHolder>
)
