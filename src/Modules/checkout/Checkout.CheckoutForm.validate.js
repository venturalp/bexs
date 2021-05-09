import {
  removeCardMask,
  removeDateMask,
  removeNumberMask,
} from 'Commons/form/Form.Helpers'
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
    .matches(/^[a-zA-Z]* {1}[\S ]*/gim, 'Insira seu nome completo'),
  expiration: yup
    .string()
    .required('Campo obrigatório')
    .test({
      message: 'Dado incompleto',
      test: value => {
        const cleanValue = removeDateMask(value)

        return cleanValue && cleanValue.length === 4
      },
    })
    .test({
      message: 'Data inválida',
      test: value => {
        const today = new Date()
        const year = parseInt(
          today.getUTCFullYear().toString().substr(2, 2),
          10,
        )
        const month = today.getMonth() + 1
        const cleanValue = removeDateMask(value)
        const valueMonth = parseInt(cleanValue.substr(0, 2), 10)
        const valueYear = parseInt(cleanValue.substr(2, 2), 10)

        if ((month > valueMonth && valueYear <= year) || valueYear < year) {
          return false
        }

        return true
      },
    }),
  cvv: yup
    .string()
    .required('Campo obrigatório')
    .test({
      message: 'CVV inválido',
      test: value => {
        const cleanValue = removeNumberMask(value)

        return cleanValue && cleanValue.length === 3
      },
    }),
  instalments: yup.string().required('Campo obrigatório'),
})
