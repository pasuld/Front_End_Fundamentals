import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <a href="https://www.planoeplano.com.br" target="_blank">
          <img src= "https://www.planoeplano.com.br/estatico/2023/09/28/14/41/8e7f75592be9b230f218731596f8e80b2d952894.webp" className="logo" alt = "Apartamento" />
        </a>  
        <a href="https://www.catagua.com.br" target="_blank">
          <img src="https://i0.wp.com/catagua.com.br/wp-content/uploads/2024/02/fachada-diurna.jpg?resize=1024%2C576&ssl=1"className="logo" alt="Casa" />
        </a>    
     </div>
      <h1>Apartamento + Casa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
