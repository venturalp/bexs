import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { ThemeWrapper } from 'Commons/tests/Tests.Helpers'
import React from 'react'
import { CheckoutForm } from '../Checkout.CheckoutForm'
import userEvent from '@testing-library/user-event'

describe('test checkout form', () => {
  it('test form validations', async () => {
    const updateCardInfoMock = jest.fn()
    render(
      <ThemeWrapper>
        <CheckoutForm updateCardInfo={updateCardInfoMock} />
      </ThemeWrapper>,
    )
    const cardNumber = screen.getByTestId('cardNumber')
    const cardName = screen.getByTestId('cardName')
    const cvv = screen.getByTestId('cvv')
    const expiration = screen.getByTestId('expiration')
    const instalments = screen.getByTestId('instalments')

    // validate required fields
    userEvent.click(cardNumber)
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getByText('Campo obrigatório')).toBeTruthy(),
    )
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getAllByText('Campo obrigatório')).toHaveLength(2),
    )
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getAllByText('Campo obrigatório')).toHaveLength(3),
    )
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getAllByText('Campo obrigatório')).toHaveLength(4),
    )
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getAllByText('Campo obrigatório')).toHaveLength(5),
    )
    // cardNumber validations
    userEvent.click(cardNumber)
    userEvent.clear(cardNumber)
    fireEvent.change(cardNumber, { target: { value: '123' } })
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getByText('Número de cartão inválido')).toBeTruthy(),
    )
    userEvent.click(cardNumber)
    fireEvent.change(cardNumber, { target: { value: '1234432112344321' } })
    userEvent.tab()
    await waitFor(async () =>
      expect(screen.queryByText('Número de cartão inválido')).toBeNull(),
    )
    // cardName validations
    userEvent.click(cardName)
    userEvent.clear(cardName)
    fireEvent.change(cardName, { target: { value: 'Foo' } })
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getByText('Insira seu nome completo')).toBeTruthy(),
    )
    userEvent.click(cardName)
    fireEvent.change(cardName, { target: { value: 'foo bar' } })
    userEvent.tab()
    await waitFor(async () =>
      expect(screen.queryByText('Insira seu nome completo')).toBeNull(),
    )
    // expiration validations
    userEvent.click(expiration)
    userEvent.clear(expiration)
    fireEvent.change(expiration, { target: { value: '12' } })
    userEvent.tab()
    await waitFor(() =>
      expect(screen.getByText('Dado incompleto')).toBeTruthy(),
    )
    userEvent.click(expiration)
    fireEvent.change(expiration, { target: { value: '1222' } })
    userEvent.tab()
    await waitFor(async () =>
      expect(screen.queryByText('Dado incompleto')).toBeNull(),
    )
    userEvent.click(expiration)
    userEvent.clear(expiration)
    fireEvent.change(expiration, { target: { value: '1120' } })
    userEvent.tab()
    await waitFor(() => expect(screen.getByText('Data inválida')).toBeTruthy())
    userEvent.click(expiration)
    fireEvent.change(expiration, { target: { value: '1222' } })
    userEvent.tab()
    await waitFor(async () =>
      expect(screen.queryByText('Data inválida')).toBeNull(),
    )
    // cvv validations
    userEvent.click(cvv)
    userEvent.clear(cvv)
    fireEvent.change(cvv, { target: { value: '12' } })
    userEvent.type(cvv, '{enter}')
    userEvent.tab()
    await waitFor(() => expect(screen.getByText('CVV inválido')).toBeTruthy())
    userEvent.click(cvv)
    fireEvent.change(cvv, { target: { value: '123' } })
    userEvent.tab()
    await waitFor(async () =>
      expect(screen.queryByText('CVV inválido')).toBeNull(),
    )
    await userEvent.selectOptions(instalments, '1x')
    fireEvent.change(expiration, { target: { value: '1222' } })
    await userEvent.type(cvv, '{enter}')
    await waitFor(async () =>
      expect(screen.getByText('Checkout efetuado com sucesso')).toBeTruthy(),
    )
  })
})
