import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('calcula el módulo correctamente (10 % 3 = 1)', () => {
  render(<App />)
  
  // Obtener elementos
  const button1 = screen.getByRole('button', { name: '1' })
  const button0 = screen.getByRole('button', { name: '0' })
  const button3 = screen.getByRole('button', { name: '3' })
  const moduloButton = screen.getByRole('button', { name: '%' })
  const equalsButton = screen.getByRole('button', { name: '=' })
  const display = screen.getByTestId('display')

  fireEvent.click(button1)
  fireEvent.click(button0)
  fireEvent.click(moduloButton)
  fireEvent.click(button3)
  fireEvent.click(equalsButton)

  expect(display).toHaveTextContent('1')  // (10 % 3) = 1
})

test('muestra ERROR en módulo por cero (5 % 0)', () => {
  render(<App />)

  // Obtener elementos
  const button0 = screen.getByRole('button', { name: '0' })
  const button5 = screen.getByRole('button', { name: '5' })
  const moduloButton = screen.getByRole('button', { name: '%' })
  const equalsButton = screen.getByRole('button', { name: '=' })
  const display = screen.getByTestId('display')

  fireEvent.click(button5)
  fireEvent.click(moduloButton)
  fireEvent.click(button0)
  fireEvent.click(equalsButton)

  expect(display).toHaveTextContent('NaN') // NaN = Not a Number
})