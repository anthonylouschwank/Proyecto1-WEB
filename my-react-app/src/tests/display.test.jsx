import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App.jsx'

test('muestra "0" inicialmente en el display', () => {
  render(<App />)
  const display = screen.getByTestId('display') // Busca por test-id
  expect(display).toHaveTextContent('0')
})