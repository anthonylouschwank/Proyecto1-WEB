import { useState } from 'react';
import { Display } from '../Display/Display';
import { Button } from '../Button/Button';
import './Calculator.css';

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

  
  return (
    <div className="app-container">
      <div className="card">
        <div className="calculator">
          <div className="display" data-testid="display">{displayValue}</div>
          <div className="buttons">
            <div className="number-grid">
              {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
                <button key={num} onClick={() => handleNumber(num.toString())}>
                  {num}
                </button>
              ))}
              <button onClick={() => handleNumber('.')}>.</button>
              <button onClick={calculate}>=</button>
            </div>
            <button onClick={clear} className="operator">
              C
            </button>
            {['+', '-', '*', '/', '%'].map((op) => (
              <button
                key={op}
                onClick={() => handleOperator(op)}
                className="operator"
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}