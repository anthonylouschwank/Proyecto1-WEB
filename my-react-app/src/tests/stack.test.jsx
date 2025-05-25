import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('al hacer clic en "2" y "3", el display muestra "23"', () => {
  render(<App />);
  
  // Obtener los botones y el display
  const button2 = screen.getByRole('button', { name: '2' });
  const button3 = screen.getByRole('button', { name: '3' });
  const display = screen.getByTestId('display');

  // Simular clics
  fireEvent.click(button2);
  fireEvent.click(button3);

  // Verificar el resultado
  expect(display).toHaveTextContent('23');
});