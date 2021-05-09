import { removeCardMask, removeDateMask } from 'Commons/form/Form.Helpers'
import * as yup from 'yup'

export const checkoutSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Campo obrigatório')
    .test({
      message: 'Número de cartão inválido',
      test: value => {
        const cleanValue = removeCardMask(value)

        return cleanValue && cleanValue.length === 16
      },
    }),
  cardName: yup
    .string()
    .required('Campo obrigatório')
    .test({
      message: 'Campo obrigatório',
      test: value => value && value.length > 0,
    }),
  expiration: yup
    .string()
    .required('Campo obrigatório')
    .test({
      message: 'Dado inválido',
      test: value => {
        const cleanValue = removeDateMask(value)

        return cleanValue && cleanValue.length === 4
      },
    }),
})
