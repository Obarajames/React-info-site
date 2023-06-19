import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
        <div className="nav">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>React Facts </h1>
        </div>
        
        <h3>React course-Project 1</h3>
        </nav>
      </div>
      <main>
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="main-facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    </>
  )
}

export default App
