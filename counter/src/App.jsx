import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(15)
  // let counter = 15;
  const addValue = ()=>{
    console.log("Clicked", counter);
    // counter= counter +1
    // setcounter(counter+1)
    if (counter <20) {
      setcounter(counter+1)
      
    } else {
      setcounter(counter-0)
      
    }
    
  }
  const removeValue = ()=>{
    console.log("Clicked", counter);
    // counter= counter +1
    // setcounter(counter-1)
    if (counter>0 || counter ==20){
      setcounter(counter -1)
    
    } else {
      setcounter(counter+0)
      
    }
    
  }
  return (
    <> 
    <h1>Chai and Code</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue} >Add value{counter}</button>
    <br />
    <button onClick={removeValue}>remove Value{counter}</button>
    <p>footer:{counter}</p>
       </>
   
  )
}

export default App
