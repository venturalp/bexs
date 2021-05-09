import { useRequests } from 'Commons/requests/Requests.defaults'

export const useCheckoutServices = () => {
  const axios = useRequests()

  return {
    doCheckout: async data =>
      axios
        .post('/checkout', data)
        .then(() => ({
          success: true,
        }))
        .catch(() => ({ success: false, msg: 'Erro ao efetuar checkout' })),
  }
}
