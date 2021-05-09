/* eslint-disable operator-linebreak */
import React from 'react'
import CardFront from 'Assets/card-front.png'
import CardFrontEmpty from 'Assets/card-front-empty.png'
import CardBack from 'Assets/card-back.png'
import CardBackEmpty from 'Assets/card-back-empty.png'
import styled, { css } from 'styled-components'

const CardNumber = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: ${props => props.theme.textContrast};
  }
`

const Card = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  img {
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  ${props =>
    props.isBack &&
    css`
      transform: rotateY(180deg) translateZ(1px);
      z-index: 2;
    `}
  img {
    transition: all 0.2s linear;
    opacity: ${props => (props.isFilled ? 1 : 0)};
    &.empty {
      opacity: ${props => (props.isFilled ? 0 : 1)};
    }
  }
`

const CardHolder = styled.div`
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.8s;
  transform: translateZ(-1px);
  ${props =>
    props.flipped &&
    css`
      transform: rotateY(180deg) translateZ(1px);
    `}
  .img-hidden {
    visibility: hidden;
  }
`

export const FlipCard = ({
  isFront = true,
  cardNumber = '',
  cardName,
  expiration,
  cvv,
  ...props
}) => {
  const isBackFilled = () => cvv && cvv !== ''
  const isFrontFilled = () =>
    (cardNumber && cardNumber !== '') ||
    (expiration && expiration !== '') ||
    (cardName && cardName !== '')

  return (
    <CardHolder flipped={!isFront} {...props}>
      <img src={CardFront} alt="img-hidden" className="img-hidden" />
      <Card className="card-front" isFilled={isFrontFilled()}>
        <img src={CardFront} alt="card" />
        <img src={CardFrontEmpty} alt="card" className="empty" />
        <CardNumber>
          <p>{cardNumber.substr(0, 4).padEnd(4, '*')}</p>
          <p>{cardNumber.substr(4, 4).padEnd(4, '*')}</p>
          <p>{cardNumber.substr(8, 4).padEnd(4, '*')}</p>
          <p>{cardNumber.substr(12, 4).padEnd(4, '*')}</p>
        </CardNumber>
      </Card>
      <Card className="card-back" isBack isFilled={isBackFilled()}>
        <img src={CardBack} alt="card" />
        <img src={CardBackEmpty} alt="card" className="empty" />
      </Card>
    </CardHolder>
  )
}
