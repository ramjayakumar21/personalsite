import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import DarkModeButton from './components/DarkModeButton'
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
  <div className='content'>
    <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}></DarkModeButton>
    <Card darkMode={darkMode}/>
  </div>
  )
}


export default App
