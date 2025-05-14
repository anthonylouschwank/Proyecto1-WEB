import { useState } from 'react'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [newNumber, setNewNumber] = useState(true)

  // Manejar números
  const handleNumber = (num) => {
    if (newNumber) {
      setDisplayValue(num)
      setNewNumber(false)
    } else {
      setDisplayValue(displayValue + num)
    }
  }

  // Manejar operadores
  const handleOperator = (op) => {
    setFirstNumber(parseFloat(displayValue))
    setOperator(op)
    setNewNumber(true)
  }

  // Calcular resultado
  const calculate = () => {
    if (!operator) return
    
    const secondNumber = parseFloat(displayValue)
    let result = 0

    switch(operator) {
      case '+':
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case '*':
        result = firstNumber * secondNumber
        break
      case '/':
        result = firstNumber / secondNumber
        break
      default:
        return
    }

    setDisplayValue(result.toString())
    setNewNumber(true)
    setOperator(null)
  }

  // Limpiar pantalla
  const clear = () => {
    setDisplayValue('0')
    setFirstNumber(null)
    setOperator(null)
    setNewNumber(true)
  }

  return (
    <div className="card">
      <div className="calculator">
        <div className="display">{displayValue}</div>

        <div className="buttons">
          <div className="number-grid">
            
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
              <button key={num} onClick={() => handleNumber(num.toString())}>
                {num}
              </button>
            ))}
            <button onClick={() => handleNumber('.')}>.</button>
            <button onClick={calculate}>=</button>
          </div>
          <button onClick={clear} className="operator">C</button>
          {["+", "-", "*", "/"].map(op => (
            <button key={op} onClick={() => handleOperator(op)} className="operator">
              {op}
            </button>
          ))}

          
        </div>
      </div>
    </div>
  )
}

export default App