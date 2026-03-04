import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0)

  let myObj = {
    username: "kaleem",
    age: 20
  }

  let myArr = [1,2,3,4,5];
  return (
  <>
  
   <Card  username= "Alex"  anyArr = {myArr} />
  
  </>
  )
}


export default App
