import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'




function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"Ashish",
    age: 28
  }

  let newArr = [1,2,3,4]

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl'>tailwind Cli</h1>
     <Card  someObje={newArr}/>
     <Card username="Ashish" btnText="Click me"/>
     <Card username="Vikash " btnText="visit me"/>
     
     
    </>
  )
}

export default App
