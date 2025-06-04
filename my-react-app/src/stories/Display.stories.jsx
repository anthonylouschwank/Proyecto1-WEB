import { Display } from '../components/Display/Display.jsx'
import '../components/Display/Display.css'
import { Button } from '../components/Button/Button.jsx'
import { useState } from 'react'


export default {
  title: 'Calculator/Display',
  component: Display,
}

export const Default = { args: { value: '0' } }
export const WithValue = { args: { value: '123.45' } }
export const ErrorState = { args: { value: 'ERROR' } }

export const InteractiveWithClear = () => {
  const [displayValue, setDisplayValue] = useState('123.45') // Valor inicial

  const handleClear = () => {
    setDisplayValue('0') // Reset al hacer clic en "C"
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Display value={displayValue} />
      <Button onClick={handleClear} className="operator">
        C
      </Button>
    </div>
  )
}

// Story que simula entrada de usuario (¡nueva!)
export const SimulatedUserInput = () => {
  const [displayValue, setDisplayValue] = useState('0')

  const handleButtonClick = (num) => {
    setDisplayValue(prev => prev === '0' ? num : prev + num)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Display value={displayValue} />
      <div style={{ display: 'flex', gap: '5px' }}>
        {['1', '2', '3'].map((num) => (
          <Button key={num} onClick={() => handleButtonClick(num)}>
            {num}
          </Button>
        ))}
        <Button onClick={() => setDisplayValue('0')} className="operator">
          C
        </Button>
      </div>
    </div>
  )
}