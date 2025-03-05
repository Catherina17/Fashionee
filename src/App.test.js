import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Рендер первой страницы', () => {
  test('Успешное переключение между Shop и Cart', () => {
    render(<App />);
    const shopElement = screen.getByText(/Shop/i, { selector: '.shop.active' })
    expect(shopElement).toBeInTheDocument()
    
    const cartElement = screen.getByText(/Cart/i)
    expect(cartElement).toBeInTheDocument()

    fireEvent.click(cartElement)

    const activeCartElement = screen.getByText(/Cart/i, { selector: '.cart.active' })
    expect(activeCartElement).toBeInTheDocument()
    expect(screen.queryByText(/Shop/i, { selector: '.shop.active' })).not.toBeInTheDocument()
  })
})
