import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('realiza la secuencia: 2 + 4 = * 9 = / 2 =', () => {
  render(<App />);
  
  // Obtener todos los botones necesarios
  const button2 = screen.getByRole('button', { name: '2' });
  const button4 = screen.getByRole('button', { name: '4' });
  const button9 = screen.getByRole('button', { name: '9' });
  const addButton = screen.getByRole('button', { name: '+' });
  const multiplyButton = screen.getByRole('button', { name: '*' });
  const divideButton = screen.getByRole('button', { name: '/' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  const display = screen.getByTestId('display');

  // Secuencia: 2 + 4 =
  fireEvent.click(button2);
  fireEvent.click(addButton);
  fireEvent.click(button4);
  fireEvent.click(equalsButton);
  expect(display).toHaveTextContent('6'); // Verificación intermedia

  // Continuar con * 9 =
  fireEvent.click(multiplyButton);
  fireEvent.click(button9);
  fireEvent.click(equalsButton);
  expect(display).toHaveTextContent('54'); // Verificación intermedia

  // Finalizar con / 2 =
  fireEvent.click(divideButton);
  fireEvent.click(button2);
  fireEvent.click(equalsButton);
  expect(display).toHaveTextContent('27'); // Resultado final
});