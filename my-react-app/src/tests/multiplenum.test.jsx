import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('realiza la secuencia: 2 + 4 = * 9 = / 2 =', () => {
  render(<App />)
  
  // Obtener todos los botones por su texto visible
  const button2 = screen.getByText('2')
  const button4 = screen.getByText('4')
  const button9 = screen.getByText('9')
  const addButton = screen.getByText('+')
  const multiplyButton = screen.getByText('×')  
  const divideButton = screen.getByText('÷')    
  const equalsButton = screen.getByText('=')
  const display = screen.getByTestId('display')

  // Secuencia: 2 + 4 =
  fireEvent.click(button2)
  fireEvent.click(addButton)
  fireEvent.click(button4)
  fireEvent.click(equalsButton)
  expect(display).toHaveTextContent('6')

  // Continuar con × 9 =
  fireEvent.click(multiplyButton)
  fireEvent.click(button9)
  fireEvent.click(equalsButton)
  expect(display).toHaveTextContent('54')

  // Finalizar con ÷ 2 =
  fireEvent.click(divideButton)
  fireEvent.click(button2)
  fireEvent.click(equalsButton)
  expect(display).toHaveTextContent('27')
})