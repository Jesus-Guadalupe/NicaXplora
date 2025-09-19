import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/homepage'
import Destinos from './pages/Destinos'
import Rutas from './pages/Rutas'
import Favoritos from './pages/Favoritos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/destinos' element={<Destinos/>}></Route>
        <Route path='/rutas' element={<Rutas/>}></Route>
        <Route path='/favoritos' element={<Favoritos/>}></Route>
      </Routes>
    </>
  )
}

export default App
