import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
      <img src="./images/react1.png"/> 
      <ul>
        <li>React</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     </header>
     <hr/>
     <h1 class="head">Fun facts about react</h1>

     <ul class="list">
      <p>Was first realise in 2013</p>
      <p>Was orriginally created by Walke</p>
      <p>Was well over 100K stars on gitub</p>
      <p>Is maintained by facebook</p>
     </ul>
    </>
  )
}

export default App
