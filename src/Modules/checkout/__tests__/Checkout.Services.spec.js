import { renderHook } from '@testing-library/react-hooks'
import { rest, server } from 'Commons/tests/Tests.MockServer'
import { useCheckoutServices } from 'Modules/checkout/Checkout.Services'

describe('test checkout services', () => {
  it('test checkout success', async () => {
    const { result: checkoutServices } = renderHook(() => useCheckoutServices())
    const res = await checkoutServices.current.doCheckout({})

    expect(res.success).toBeTruthy()
  })
  it('test checkout fail', async () => {
    const { result: checkoutServices } = renderHook(() => useCheckoutServices())
    server.use(
      rest.post(
        'https://60981e24e48ec00017873616.mockapi.io/api/bexs/pagar',
        (req, res, ctx) => res(ctx.status(400)),
      ),
    )
    const res = await checkoutServices.current.doCheckout({})

    expect(res).toMatchObject({
      success: false,
      msg: 'Erro ao efetuar checkout',
    })
  })
})
