import { render, screen } from '@testing-library/react'
import { PromoCodeWrapper } from '../components/cart/promoCodeWrapper/promoCodeWrapper'
import { BasketProvider } from '../context/basketContext'

describe('Рендер первой страницы', () => {
  test('Успешное рендер блока You Have A Promo Code', () => {
    render(
      <BasketProvider>
        <PromoCodeWrapper />
      </BasketProvider>
    )
    const promoCode = screen.getByText(/You Have A Promo Code/i)
    expect(promoCode).toBeInTheDocument()
  });
})