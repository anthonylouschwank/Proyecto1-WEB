import { Button } from '../components/Button/Button';

export default {
  title: 'Calculator/Button',
  component: Button,
};

export const NumberButton = { args: { children: '7' } };
export const OperatorButton = { args: { children: '+', className: 'operator' } };