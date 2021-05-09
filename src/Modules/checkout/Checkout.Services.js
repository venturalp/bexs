import { useRequests } from 'Commons/requests/Requests.defaults'

export const useCheckoutServices = () => {
  const axios = useRequests()

  return {
    doCheckout: async data =>
      axios
        .post('/pagar', data, { showLoading: true })
        .then(() => ({
          success: true,
          msg: 'Checkout efetuado com sucesso',
        }))
        .catch(() => ({ success: false, msg: 'Erro ao efetuar checkout' })),
  }
}
