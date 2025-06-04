import { Button } from '../components/Button/Button';

export default {
  title: 'Calculator/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    type: { 
      control: 'select',
      options: ['number', 'operator', 'function']
    }
  }
};

// Botón numérico (estilo oscuro)
export const NumberButton = {
  args: {
    children: '7',
    type: 'number'
  }
};

// Botón de operador (naranja)
export const OperatorButton = {
  args: {
    children: '÷',
    type: 'operator'
  }
};

// Botón de función (gris)
export const FunctionButton = {
  args: {
    children: 'C',
    type: 'function'
  }
};

// Botón cero (especial)
export const ZeroButton = {
  args: {
    children: '0',
    type: 'number',
    isZero: true
  }
};