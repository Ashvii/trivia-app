import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from "./Components/Home"
import Game from './Components/Game'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
    </Routes>
    </>
  )
}

export default App
