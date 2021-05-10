import '@testing-library/jest-dom/extend-expect'
import { server } from 'Commons/tests/Tests.MockServer'
import MockDate from 'mockdate'

jest.setTimeout(3000)

MockDate.set('2020-12-30')

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())
