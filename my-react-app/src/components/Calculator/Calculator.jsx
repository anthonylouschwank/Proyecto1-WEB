import { useState } from 'react'
import { Display } from '../Display/Display'
import { Button } from '../Button/Button'
import './Calculator.css'

export function Calculator() {
  const [displayValue, setDisplayValue] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplayValue(num)
      setNewNumber(false)
    } else {
      if (displayValue.replace('.', '').length < 9) {
        setDisplayValue(displayValue + num)
      }
    }
  }

  const handleOperator = (op) => {
    setFirstNumber(parseFloat(displayValue))
    setOperator(op)
    setNewNumber(true)
  }

  const calculate = () => {
    if (!operator) return

    const secondNumber = parseFloat(displayValue)
    let result = 0

    switch (operator) {
    case '+':
      result = firstNumber + secondNumber
      break
    case '-':
      if (firstNumber < secondNumber) {
        setDisplayValue('ERROR')
        setNewNumber(true)
        setOperator(null)
        return
      }
      result = firstNumber - secondNumber
      break
    case '*':
      result = firstNumber * secondNumber
      break
    case '/':
      result = firstNumber / secondNumber
      break
    case '%':
      result = firstNumber % secondNumber
      break
    default:
      return
    }

    let formattedResult = result.toString()
    if (formattedResult.length > 9) {
      if (formattedResult.includes('.')) {
        formattedResult = parseFloat(result).toFixed(
          Math.max(0, 8 - formattedResult.split('.')[0].length)
        )
      } else {
        formattedResult = parseFloat(result).toExponential(2)
      }
    }
    setDisplayValue(formattedResult)
    setNewNumber(true)
    setOperator(null)
  }

  const clear = () => {
    setDisplayValue('0')
    setFirstNumber(null)
    setOperator(null)
    setNewNumber(true)
  }

  const toggleSign = () => {
    if (displayValue === '0' || displayValue === 'ERROR') return;
    
    // Maneja números en notación científica
    if (displayValue.includes('e')) {
      const [base, exponent] = displayValue.split('e');
      const newBase = base.startsWith('-') ? base.substring(1) : '-' + base;
      setDisplayValue(`${newBase}e${exponent}`);
    } else {
      setDisplayValue(displayValue.startsWith('-') 
        ? displayValue.substring(1) 
        : '-' + displayValue);
    }
    setNewNumber(false);
  };

  
return (
  <div className="app-container">
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {/* Fila 1 */}
        <button className="gray" onClick={clear}>C</button>
        <button className="gray">( )</button> {/* Opcional: implementar funcionalidad */}
        <button className="gray" onClick={() => handleOperator('%')}>%</button>
        <button className="orange" onClick={() => handleOperator('/')}>÷</button>

        {/* Fila 2 */}
        <button className="dark" onClick={() => handleNumber('7')}>7</button>
        <button className="dark" onClick={() => handleNumber('8')}>8</button>
        <button className="dark" onClick={() => handleNumber('9')}>9</button>
        <button className="orange" onClick={() => handleOperator('*')}>×</button>

        {/* Fila 3 */}
        <button className="dark" onClick={() => handleNumber('4')}>4</button>
        <button className="dark" onClick={() => handleNumber('5')}>5</button>
        <button className="dark" onClick={() => handleNumber('6')}>6</button>
        <button className="orange" onClick={() => handleOperator('-')}>-</button>

        {/* Fila 4 */}
        <button className="dark" onClick={() => handleNumber('1')}>1</button>
        <button className="dark" onClick={() => handleNumber('2')}>2</button>
        <button className="dark" onClick={() => handleNumber('3')}>3</button>
        <button className="orange" onClick={() => handleOperator('+')}>+</button>

        {/* Fila 5 */}
        <button className="dark" onClick={toggleSign}>+/-</button> 
        <button className="dark zero" onClick={() => handleNumber('0')}>0</button>
        <button className="dark" onClick={() => handleNumber('.')}>.</button>
        <button className="orange" onClick={calculate}>=</button>
      </div>
    </div>
  </div>
);
}