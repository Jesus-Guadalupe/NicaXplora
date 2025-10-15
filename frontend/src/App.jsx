import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/homepage'
import Destinos from './pages/Destinos'
import Rutas from './pages/Rutas'
import Favoritos from './pages/Favoritos'
import ProtectedRoute from './components/ProtectedRoute' // import existente


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Routes>
            <Route path='/' element={<LoginPage/>}></Route>

            {/* Todas las rutas protegidas */}
            <Route path='/homepage' element={<ProtectedRoute><Homepage/></ProtectedRoute>}></Route>
            <Route path='/destinos' element={<ProtectedRoute><Destinos/></ProtectedRoute>}></Route>
            <Route path='/rutas' element={<ProtectedRoute><Rutas/></ProtectedRoute>}></Route>
            <Route path='/favoritos' element={<ProtectedRoute><Favoritos/></ProtectedRoute>}></Route>
          </Routes>
    </>
  )
}

export default App
