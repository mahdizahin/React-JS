import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>Shun Zahin Takar Cheye Boro Kuno Motivation Nai </h1>
        </a>
      </div>
      <h1>Ami + Tumi</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I Love you  {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Please On my brain not in my heart
      </p>
    </>
  )
}

export default App
