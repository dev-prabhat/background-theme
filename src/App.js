import React, { useState } from 'react'
import ThemeChanger from './Components/ThemeChanger'
import ThemeContext from './Context/ThemeContext'


const App = () => {
  const themeValue = useState("grey")
  return (
    <ThemeContext.Provider value={themeValue}>
      <div>
        <h1>BackGround Changer Application</h1>
        <ThemeChanger />
      </div>
    </ThemeContext.Provider>
  )
}


export default App