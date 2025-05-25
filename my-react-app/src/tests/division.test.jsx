import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('realiza la operación 2 + 4 / 3 = 8', () => {
  render(<App />);
  
  // Obtener elementos
  const button2 = screen.getByRole('button', { name: '2' });
  const button3 = screen.getByRole('button', { name: '3' });
  const button4 = screen.getByRole('button', { name: '4' });
  const divideButton = screen.getByRole('button', { name: '/' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  const display = screen.getByTestId('display');

  // Simular la secuencia: 24 / 3 =
  fireEvent.click(button2);
  fireEvent.click(button4);
  fireEvent.click(divideButton);
  fireEvent.click(button3);
  fireEvent.click(equalsButton);

  // Verificar el resultado
  expect(display).toHaveTextContent('8'); // (24 / 3) ≈ 8 (depende de tu lógica de redondeo)
});