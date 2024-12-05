import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  // let myObj ={
  //   username:"Ruqia",
  //   age:14
  // }
  

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind test</h1>
    <Card username="Chai and Code" btntext="click me" />
    <Card username="Chai and Code" />

   
          
   


     
    </>
  )
}

export default App
