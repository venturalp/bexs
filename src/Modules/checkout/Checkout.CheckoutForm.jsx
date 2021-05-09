/* eslint-disable jsx-a11y/control-has-associated-label */
import { InputContainer } from 'Commons/form/Form.InputContainer'
import React, { useEffect, useState } from 'react'
import IcoInfo from 'Assets/ico-info.svg'
import { CVVInfoWrapper, FormWrapper } from './Checkout.CheckoutForm.style'
import { Step } from 'Commons/steps/Steps.Step'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ReactInputMask from 'react-input-mask'
import { checkoutSchema } from './Checkout.CheckoutForm.validate'
import { CardMask } from 'Commons/card/Card.CardMask'
import { useCheckoutServices } from './Checkout.Services'
import { InputFeedbackMessage } from 'Commons/form/Form.InputContainer.style'

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
    watch,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(checkoutSchema),
  })
  const [formFeedback, setFormFeedback] = useState({ success: false, msg: '' })
  const { doCheckout } = useCheckoutServices()
  const watchCardFields = watch()

  const onSubmit = async data => {
    console.log(data)
    const res = await doCheckout(data)
    setFormFeedback({
      success: res.success,
      msg: res.msg,
    })
  }

  useEffect(() => {
    updateCardInfo({
      cvv: watchCardFields.cvv,
      cardName: watchCardFields.cardName,
      cardNumber: watchCardFields.cardNumber,
      expiration: watchCardFields.expiration,
    })
  }, [
    watchCardFields.cvv,
    watchCardFields.cardName,
    watchCardFields.cardNumber,
    watchCardFields.expiration,
  ])

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Step step={1} label="Carrinho" checked />
        <Step step={2} label="Pagamento" />
        <Step step={3} label="Confirmação" last />
      </header>
      <ReactInputMask {...CardMask} {...register('cardNumber')}>
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
        {...register('cardName')}
        error={errors?.cardName?.message}
      >
        <input />
      </InputContainer>
      <div className="row">
        <ReactInputMask
          mask="89/99"
          formatChars={{
            9: '[0-9]',
            8: '[0-1]',
          }}
          {...register('expiration')}
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
          {...register('cvv')}
          onFocus={() => updateCardInfo({ ...watchCardFields, isFront: false })}
          onBlur={() => updateCardInfo({ ...watchCardFields, isFront: true })}
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
        error={errors?.instalments?.message}
      >
        <select defaultValue="">
          <option value="" disabled />
          <option value="1x">1x R$ 12.000,00 sem juros</option>
          <option value="2x">2x R$ 6.000,00 sem juros</option>
        </select>
      </InputContainer>
      <footer>
        <InputFeedbackMessage success={formFeedback?.success}>
          {formFeedback?.msg}
        </InputFeedbackMessage>
        <button type="submit">Continuar</button>
      </footer>
    </FormWrapper>
  )
}
