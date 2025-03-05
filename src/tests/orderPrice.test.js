import { render, screen } from '@testing-library/react'
import { OrderPrice } from '../components/cart/orderPrice/orderPrice'
import { BasketProvider } from '../context/basketContext'

describe('Рендер первой страницы', () => {
  test('Успешное рендер блока Your Order', () => {
    render(
      <BasketProvider>
        <OrderPrice />
      </BasketProvider>
    )
    const yourOrder = screen.getByText(/Your Order/i)
    expect(yourOrder).toBeInTheDocument()
  });
})