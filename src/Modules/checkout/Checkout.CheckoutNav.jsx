import React from 'react'
import styled from 'styled-components'
import Arrow from 'Assets/arrow.svg'
import CardIcon from 'Assets/card-icon.svg'
import { FlipCard } from 'Commons/card/Card.FlipCard'

const NavHolder = styled.nav`
  padding-top: 53px;
  padding-bottom: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 16%,
    ${props => props.theme.mainColor} 16%
  );
  padding-left: 14%;
`

const CheckoutBackLink = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
  margin-right: 19%;
  p {
    font: normal normal normal 13px/22px Verdana;
    letter-spacing: -0.01px;
    color: ${props => props.theme.textContrast};
  }
  svg {
    fill: ${props => props.theme.textContrast};
    transform: scaleX(-1);
    margin-right: 14px;
  }
`

const CheckoutTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 19%;
  margin-bottom: 31px;
  h1 {
    font-size: ${props => props.theme.pxToRem(20)};
    line-height: ${props => props.theme.pxToRem(24)};
    letter-spacing: -0.01px;
    color: ${props => props.theme.textContrast};
  }
  svg {
    width: 50px;
  }
  > div {
    &:first-child {
      margin-right: 15px;
    }
  }
`

export const CheckoutNav = props => (
  <NavHolder>
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
    <FlipCard />
  </NavHolder>
)
