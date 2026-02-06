import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter, setCounter]  = useState(15);


 const addValue = () => {
  console.log("Clicked", counter);
 // setCounter(counter+1); These four lines increase value only one times that is equal to 16
 // setCounter(counter+1);
 // setCounter(counter+1);
 // setCounter(counter+1);
 // setCounter(counter+1);

 // Handle This situation by using call back prevCounter

 setCounter(prevCounter => prevCounter +1);
 setCounter(prevCounter => prevCounter +1);
 setCounter(prevCounter => prevCounter +1);
 setCounter(prevCounter => prevCounter +1);
 }

 const removeValue = () => {
  setCounter(counter - 1);
 }




  return (
  <div>
   
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    <p>footer: {counter}</p>
  </div>
 
  )
}

export default App
