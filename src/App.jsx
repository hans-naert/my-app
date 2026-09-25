import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)
  //const count=0;
  function handleIncrement() {
    setCount(count + 1)
    //count++
  }

  let name = 'Vives'
  let nameJSX = <h1>Hello {name}</h1>

  return (
    <>
    <Counter initialCount="5"/>
    {nameJSX}
    <div>count: {count}</div>
    <button onClick={handleIncrement}>Increment</button>
      
    </>
  )
}

export default App
