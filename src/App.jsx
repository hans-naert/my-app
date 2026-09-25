import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  //const count=0;
  function handleIncrement() {
    setCount(count + 1)
    //count++
  }

  return (
    <>
    <div>count: {count}</div>
    <button onClick={handleIncrement}>Increment</button>
      
    </>
  )
}

export default App
