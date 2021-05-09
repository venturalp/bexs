/* eslint-disable jsx-a11y/control-has-associated-label */
import { InputContainer } from 'Commons/form/Form.InputContainer'
import React from 'react'
import IcoInfo from 'Assets/ico-info.svg'
import { CVVInfoWrapper, FormWrapper } from './Checkout.CheckoutForm.style'
import { Step } from 'Commons/steps/Steps.Step'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ReactInputMask from 'react-input-mask'
import { checkoutSchema } from './Checkout.CheckoutForm.validate'
import { CardMask } from 'Commons/card/Card.CardMask'

const CVVInfo = () => (
  <CVVInfoWrapper>
    <p>CVV</p>
    <IcoInfo />
  </CVVInfoWrapper>
)

export const CheckoutForm = ({ updateCardInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(checkoutSchema),
  })

  const onSubmit = data => {
    console.log(data)
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget || {}
    if (['cardName', 'cardNumber', 'cvv', 'expiration'].includes(name)) {
      updateCardInfo({ [name]: value })
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Step step={1} label="Carrinho" checked />
        <Step step={2} label="Pagamento" />
        <Step step={3} label="Confirmação" last />
      </header>
      <ReactInputMask
        {...CardMask}
        {...register('cardNumber')}
        onChange={handleChange}
      >
        {props => (
          <InputContainer
            name="cardNumber"
            placeholder="Número do cartão"
            fullWidth
            {...props}
            error={errors?.cardNumber?.message}
          >
            <input />
          </InputContainer>
        )}
      </ReactInputMask>
      <InputContainer
        name="cardName"
        placeholder="Nome (igual ao cartão)"
        fullWidth
        onChange={handleChange}
        {...register('cardName')}
        error={errors?.cardName?.message}
      >
        <input />
      </InputContainer>
      <div className="row">
        <ReactInputMask
          mask="99/99"
          {...register('expiration')}
          onChange={handleChange}
        >
          {props => (
            <InputContainer
              name="expiration"
              placeholder="Validade"
              fullWidth
              {...props}
              error={errors?.expiration?.message}
            >
              <input />
            </InputContainer>
          )}
        </ReactInputMask>
        <ReactInputMask
          mask="999"
          onChange={handleChange}
          onFocus={() => updateCardInfo({ isFront: false })}
          onBlur={() => updateCardInfo({ isFront: true })}
          {...register('cvv')}
        >
          {props => (
            <InputContainer
              customLabel={<CVVInfo />}
              name="cvv"
              placeholder="CVV"
              fullWidth
              {...props}
              error={errors?.cvv?.message}
            >
              <input />
            </InputContainer>
          )}
        </ReactInputMask>
      </div>
      <InputContainer
        name="instalments"
        placeholder="Parcelas"
        fullWidth
        {...register('instalments')}
      >
        <select defaultValue="">
          <option value="" disabled />
          <option value="1x">1x R$ 12.000,00 sem juros</option>
          <option value="2x">2x R$ 6.000,00 sem juros</option>
        </select>
      </InputContainer>
      <footer>
        <button type="submit">Continuar</button>
      </footer>
    </FormWrapper>
  )
}
