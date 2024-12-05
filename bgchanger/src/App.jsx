import {useState} from "react"

function App() {
  const [color, setColor] = useState("Pink" )

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
        </div>
        <div 
         onClick={() => setColor("lightpink")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lightpink"}}>lightpink</button>
        </div>
        <div 
         onClick={() => setColor("lightgreen")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lightgreen"}}>lightgreen</button>
        </div>
        <div 
         onClick={() => setColor("plum")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"plum"}}>plum</button>
        </div>
        <div 
         onClick={() => setColor("Gold")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Gold"}}>Gold</button>
        </div>
        <div 
         onClick={() => setColor("lightblue")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lightblue"}}>lightblue</button>
        </div>
        <div
         onClick={() => setColor("grey")}
         className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>grey</button>
        </div>
        <div 
         onClick={() => setColor("violet")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}>violet</button>
        </div>
        <div 
         onClick={() => setColor("brown")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>brown</button>
        </div>
        <div 
         onClick={() => setColor("orange")}
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
