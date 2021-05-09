/* eslint-disable operator-linebreak */
import React from 'react'
import CardFront from 'Assets/card-front.png'
import CardFrontEmpty from 'Assets/card-front-empty.png'
import CardBack from 'Assets/card-back.png'
import CardBackEmpty from 'Assets/card-back-empty.png'
import VisaLogo from 'Assets/visa-logo.png'

import {
  Card,
  CardHolder,
  CardNumber,
  CardFrontInfo,
  CardBackInfo,
} from './Card.FlipCard.style'

export const FlipCard = ({
  isFront = true,
  cardNumber = '',
  cardName,
  expiration,
  cvv,
  ...props
}) => {
  const getPartialNumber = (value = '', part) =>
    value.substr((part - 1) * 4, 4).padEnd(4, '*')
  const getExpirationMask = (value = '') =>
    value ? `${value.substr(0, 2)}/${value.substr(2, 2)}` : '__/___'
  const isBackFilled = () => cvv && cvv !== ''
  const isFrontFilled = () =>
    (cardNumber && cardNumber !== '') ||
    (expiration && expiration !== '') ||
    (cardName && cardName !== '')

  return (
    <CardHolder flipped={!isFront} {...props}>
      <img src={CardFront} alt="img-hidden" className="img-hidden" />
      <Card className="card-front" isFilled={isFrontFilled()}>
        <img src={CardFront} alt="card" className="card" />
        <img src={CardFrontEmpty} alt="card" className="card empty" />
        {React.useMemo(
          () => (
            <CardFrontInfo>
              <img src={VisaLogo} alt="card-logo" />
              <CardNumber>
                <p>{getPartialNumber(cardNumber, 1)}</p>
                <p>{getPartialNumber(cardNumber, 2)}</p>
                <p>{getPartialNumber(cardNumber, 3)}</p>
                <p>{getPartialNumber(cardNumber, 4)}</p>
              </CardNumber>
              <div className="card-row">
                <p>{cardName}</p>
                <p>{getExpirationMask(expiration)}</p>
              </div>
            </CardFrontInfo>
          ),
          [cardName, cardNumber, expiration],
        )}
      </Card>
      <Card className="card-back" isBack isFilled={isBackFilled()}>
        <img src={CardBack} alt="card" className="card" />
        <img src={CardBackEmpty} alt="card" className="empty card" />
        <CardBackInfo>{(cvv || '').padEnd(3, '*')}</CardBackInfo>
      </Card>
    </CardHolder>
  )
}
