import { Display } from '../components/Display/Display.jsx'
import '../components/Display/Display.css'
import { Button } from '../components/Button/Button.jsx'
import { useState } from 'react'

export default {
  title: 'Calculator/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = { 
  args: { 
    value: '0',
    className: 'display' // Asegura que se apliquen los estilos
  } 
}

export const WithValue = { 
  args: { 
    value: '123.45',
    className: 'display'
  } 
}

export const ErrorState = { 
  args: { 
    value: 'ERROR',
    className: 'display'
  } 
}

export const InteractiveWithClear = () => {
  const [displayValue, setDisplayValue] = useState('123.45')

  const handleClear = () => {
    setDisplayValue('0')
  }

  return (
    <div style={{ 
      width: '300px',
      background: 'black',
      borderRadius: '20px',
      padding: '20px'
    }}>
      <Display value={displayValue} className="display" />
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginTop: '20px'
      }}>
        <Button 
          onClick={handleClear} 
          className="function" // Cambiado a clase function (gris)
          style={{ borderRadius: '50%' }}
        >
          C
        </Button>
      </div>
    </div>
  )
}

export const SimulatedUserInput = () => {
  const [displayValue, setDisplayValue] = useState('0')

  const handleButtonClick = (num) => {
    setDisplayValue(prev => prev === '0' ? num : prev + num)
  }

  const handleClear = () => {
    setDisplayValue('0')
  }

  return (
    <div style={{ 
      width: '300px',
      background: 'black',
      borderRadius: '20px',
      padding: '20px'
    }}>
      <Display value={displayValue} className="display" />
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginTop: '20px'
      }}>
        {['1', '2', '3'].map((num) => (
          <Button 
            key={num} 
            onClick={() => handleButtonClick(num)}
            className="number" // Estilo de número (oscuro)
            style={{ borderRadius: '50%' }}
          >
            {num}
          </Button>
        ))}
        <Button 
          onClick={handleClear}
          className="function" // Estilo de función (gris)
          style={{ borderRadius: '50%' }}
        >
          C
        </Button>
      </div>
    </div>
  )
}