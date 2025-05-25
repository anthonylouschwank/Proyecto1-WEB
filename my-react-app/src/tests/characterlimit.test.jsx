import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('limita el display a 9 caracteres en divisiones largas (ej: 22 / 7)', () => {
  render(<App />);
  
  // Obtener elementos
  const button2 = screen.getByRole('button', { name: '2' });
  const button7 = screen.getByRole('button', { name: '7' });
  const divideButton = screen.getByRole('button', { name: '/' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  const display = screen.getByTestId('display');

  // Simular 22 / 7
  fireEvent.click(button2);
  fireEvent.click(button2);
  fireEvent.click(divideButton);
  fireEvent.click(button7);
  fireEvent.click(equalsButton);

  // Verificar:
  // Que el resultado NO exceda 9 caracteres
  expect(display.textContent.length).toBeLessThanOrEqual(9);
  expect(display).toHaveTextContent('3.1428571');
});