/* eslint-disable jsx-a11y/control-has-associated-label */
import { InputContainer } from 'Commons/form/Form.InputContainer'
import React from 'react'
import IcoInfo from 'Assets/ico-info.svg'
import { CVVInfoWrapper, FormWrapper } from './Checkout.CheckoutForm.style'
import { Step } from 'Commons/steps/Steps.Step'

const CVVInfo = () => (
  <CVVInfoWrapper>
    <p>CVV</p>
    <IcoInfo />
  </CVVInfoWrapper>
)

export const CheckoutForm = ({ updateCardInfo }) => {
  const handleChange = e => {
    const { name, value } = e.currentTarget || {}
    if (['cardName', 'cardNumber', 'cvv', 'expiration'].includes(name)) {
      updateCardInfo({ [name]: value })
    }
  }

  return (
    <FormWrapper>
      <header>
        <Step step={1} label="Carrinho" checked />
        <Step step={2} label="Pagamento" />
        <Step step={3} label="Confirmação" last />
      </header>
      <InputContainer
        name="cardNumber"
        placeholder="Número do cartão"
        fullWidth
        onChange={handleChange}
        error="teste"
      >
        <input />
      </InputContainer>
      <InputContainer
        name="cardName"
        placeholder="Nome (igual ao cartão)"
        fullWidth
        onChange={handleChange}
      >
        <input />
      </InputContainer>
      <div className="row">
        <InputContainer
          name="expiration"
          placeholder="Validade"
          fullWidth
          onChange={handleChange}
        >
          <input />
        </InputContainer>
        <InputContainer
          customLabel={<CVVInfo />}
          name="cvv"
          placeholder="CVV"
          fullWidth
          onFocus={() => updateCardInfo({ isFront: false })}
          onBlur={() => updateCardInfo({ isFront: true })}
          onChange={handleChange}
        >
          <input />
        </InputContainer>
      </div>
      <InputContainer name="instalments" placeholder="Parcelas" fullWidth>
        <select defaultValue="">
          <option value="" disabled />
          <option value="1x">1x R$ 12.000,00 sem juros</option>
          <option value="2x">2x R$ 6.000,00 sem juros</option>
        </select>
      </InputContainer>
      <footer>
        <button type="button">Continuar</button>
      </footer>
    </FormWrapper>
  )
}
