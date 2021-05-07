/* eslint-disable operator-linebreak */
import React from 'react'
import CardFront from 'Assets/card-front.png'
import CardBack from 'Assets/card-back.png'
import styled, { css } from 'styled-components'

const CardNumber = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: ${props => props.theme.textContrast};
  }
`

const CardHolder = styled.div`
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.8s;
  ${props =>
    props.flipped &&
    css`
      transform: rotateY(180deg);
    `}
  .img-hidden {
    visibility: hidden;
  }
  .card-back {
    transform: rotateY(180deg);
  }
  .card-back,
  .card-front {
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
  }
`

export const FlipCard = ({ isFront = true, cardNumber = '12345678933' }) => (
  <CardHolder flipped={!isFront}>
    <img src={CardFront} alt="img-hidden" className="img-hidden" />
    <div className="card-front">
      <img src={CardFront} alt="card" />
      <CardNumber>
        <p>{cardNumber.substr(0, 4).padEnd(4, '0')}</p>
        <p>{cardNumber.substr(4, 4).padEnd(4, '0')}</p>
        <p>{cardNumber.substr(8, 4).padEnd(4, '0')}</p>
        <p>{cardNumber.substr(12, 4).padEnd(4, '0')}</p>
      </CardNumber>
    </div>
    <div className="card-back">
      <img src={CardBack} alt="card" />
    </div>
  </CardHolder>
)
