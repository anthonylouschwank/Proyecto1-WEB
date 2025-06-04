import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('realiza la operación 24 / 3 = 8', () => {
  render(<App />)
  
  // Obtener elementos por texto visible (más confiable)
  const button2 = screen.getByText('2')
  const button3 = screen.getByText('3')
  const button4 = screen.getByText('4')
  const divideButton = screen.getByText('÷')  // Cambiado de '/' a '÷'
  const equalsButton = screen.getByText('=')
  const display = screen.getByTestId('display')

  // Simular la secuencia: 24 / 3 =
  fireEvent.click(button2)
  fireEvent.click(button4)
  fireEvent.click(divideButton)
  fireEvent.click(button3)
  fireEvent.click(equalsButton)

  // Verificar el resultado (24 / 3 = 8)
  expect(display).toHaveTextContent('8')
})