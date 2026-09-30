import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)

    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Hello Counter</h1>
      <h2>Counter Value{counter}</h2>

      <button type='button' onClick={addValue}>Add value {counter}</button>
      <br />
      <button type ="button" onClick={removeValue}>remove value{counter}</button>
      <br />
      <p>footer:{counter}</p>
      
    </>
  )
}

export default App
