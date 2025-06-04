import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('limita el display a 9 caracteres en divisiones largas (ej: 22 / 7)', () => {
  render(<App />)
  
  // Obtener elementos por texto visible
  const button2 = screen.getByText('2')
  const button7 = screen.getByText('7')
  const divideButton = screen.getByText('÷')
  const equalsButton = screen.getByText('=')
  const display = screen.getByTestId('display')

  // Simular 22 / 7
  fireEvent.click(button2)
  fireEvent.click(button2)
  fireEvent.click(divideButton)
  fireEvent.click(button7)
  fireEvent.click(equalsButton)

  // Verificar:
  // 1. Que el resultado NO exceda 9 caracteres (incluyendo el punto)
  expect(display.textContent.replace(/\s/g, '').length).toBeLessThanOrEqual(9)
  
  // 2. Que muestre los primeros 8 dígitos (7 decimales) de 22/7
  const expectedResult = (22/7).toString().substring(0, 9)
  expect(display.textContent.replace(/\s/g, '')).toBe(expectedResult)
})