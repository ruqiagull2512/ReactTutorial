// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import { jsx as _jsx } from "react/jsx-runtime.js";
// import './index.css'
// import App from './App.jsx'
function App(){
    const user ="Chai and code"
    return(
        <>
        <h1>Hello world {user}</h1>
        <p>Chai and Code</p>
        </>
    )
}
// function MyApp(){
//     return(
//         <div>
//             <h1>Custom react</h1>
//         </div>
//     )
// }
// const ReactElement={
//     type:'a',
//     props:{
//         href:'http://google.com',
//         target:'_blank'
//     },
//     Children:'Click me to visit google'
// }
const anotherElement = (
    <a href="https://google.com" target ='_blank'>Visit Google</a>
)
const user="Chai and code"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank ' },
        'click me to visit google',
        user
)
createRoot(document.getElementById('root')).render(
    // <App/>
    reactElement
    
    // <MyApp />
    // anotherElement
    // reactElement
)
