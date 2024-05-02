import { useState } from 'react'
import {createPortal} from 'react-dom'
import Header from './components/Header'
// import Types from './components/Types'
import Pokemon from './components/Pokemon'
import './App.css'



function App() {
  const [shadowTheme, setShadowTheme] = useState(false)

  function changeTheme (){
    setShadowTheme(theme => !theme)
  }

  return (
    <div>
        <Header shadowTheme={shadowTheme} changeTheme={changeTheme} />
        {/* <Types/> */}
        <Pokemon shadowTheme={shadowTheme} />
    </div>
  )
}

export default App