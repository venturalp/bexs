import React from 'react'
import { Line, Strip, CartContainerWrapper } from './Cart.Container.style'

export const CartContainer = () => (
  <CartContainerWrapper>
    <div className="title">
      <Strip height={18} />
    </div>
    <Line />
    <div className="row">
      <Strip />
      <Strip />
    </div>
    <div className="row">
      <Strip />
      <Strip />
    </div>
    <div className="row">
      <Strip />
      <Strip />
    </div>
    <Line />
    <div className="row">
      <Strip dark />
      <Strip dark />
    </div>
  </CartContainerWrapper>
)
