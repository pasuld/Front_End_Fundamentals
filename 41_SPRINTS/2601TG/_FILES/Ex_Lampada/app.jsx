import { useState } from 'react'
import './App.css'

function App() {
  // Trocamos o count por um booleano (false = desligado)
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <h1>Projeto Lâmpada</h1>
      
      <div className="card">
        {/* A classe CSS muda dependendo do estado isOn */}
        <div className={`lampada ${isOn ? 'acesa' : 'apagada'}`}>
          {isOn ? '💡' : '🌑'}
        </div>

        <button onClick={() => setIsOn(!isOn)}>
          {isOn ? 'DESLIGAR' : 'LIGAR'}
        </button>
        
        <p>A lâmpada está <strong>{isOn ? 'Ligada' : 'Desligada'}</strong></p>
      </div>
    </>
  )
}

export default App
