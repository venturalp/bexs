import { rest } from 'msw'

const handlers = [
  rest.get('http://foo.bar', (req, res, ctx) =>
    res(ctx.json({ success: true })),
  ),
  rest.post(
    'https://60981e24e48ec00017873616.mockapi.io/api/bexs/checkout',
    (req, res, ctx) => res(ctx.status(200)),
  ),
]

export { handlers }
