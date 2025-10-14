import React from 'react'
import { CircleUser, TextAlignJustify, X } from 'lucide-react'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Borra el usuario
    navigate("/"); // Redirige al login
  }

  return (
    // 🔹 Fondo oscuro del navbar
    <header className='bg-[#141414] fixed top-0 w-screen z-50 shadow-lg'>
      <div className='flex justify-around flex-row items-center border-b border-gray-700 py-6'>
          
          {/* 🔹 Logo */}
          <div>
            <img 
              src="/Logo-nicaxplora-blanco.png" 
              alt="Logo NicaXplora"  
              className='w-[80%] px-4 lg:w-[40%] lg:px-0'
            />
          </div>

          {/* 🔹 Menú principal con texto en verde (#5aa794) */}
          <div className='opacity-0 md:opacity-100'>
              <ul className='flex flex-row text-[#5aa794] gap-6 font-medium text-lg'>
                  <li className='hover:text-white transition-colors'>
                      <a href="/homepage">Inicio</a>
                  </li>
                  <li className='hover:text-white transition-colors'>
                      <a href="/Destinos">Destinos</a>
                  </li>
                  <li className='hover:text-white transition-colors'>
                      <a href="/rutas">Rutas</a>
                  </li>
                  <li className='hover:text-white transition-colors'>
                      <a href="/favoritos">Favoritos</a>
                  </li>
              </ul>
          </div>

          {/* 🔹 Botón de cerrar sesión con texto e ícono en verde */}
          <div onClick={handleLogout} className='hidden md:flex lg:flex cursor-pointer'>
            <div className='flex flex-row hover:translate-y-[-2px] hover:shadow-xl p-2 rounded-md text-[#5aa794]'>
                <CircleUser color="#5aa794" />
                <h1 className='ml-2 font-medium'>
                  <span>Cerrar sesión</span>
                </h1>
            </div>
          </div>

          {/* 🔹 Botón menú hamburguesa móvil en verde */}
          <button id='toggle' className='flex md:hidden lg:hidden mr-8 text-[#5aa794]'>
            <TextAlignJustify />
          </button>
      </div>

      {/* 🔹 Menú desplegable en móviles con fondo oscuro */}
      <div id='nav-toggle' className='bg-[#111111] w-full h-screen hidden'>
          <div className='flex justify-between p-4'>
              <ul className='flex flex-col text-[#5aa794] gap-6 font-medium text-3xl ml-4 mt-4'>
                  <div 
                    onClick={handleLogout} 
                    className='flex flex-row items-center cursor-pointer hover:translate-y-[-2px] hover:shadow-xl p-2 rounded-md'
                  >
                      <CircleUser color="#5aa794" />
                      <h1 className='ml-2 font-medium'>
                        <span>Cerrar sesión</span>
                      </h1>
                  </div>

                  <li className='hover:text-white transition-colors'>
                      <a href="/homepage">Inicio</a>
                  </li>
                  <li className='hover:text-white transition-colors'>
                      <a href="/Destinos">Destinos</a>
                  </li>
                  <li className='hover:text-white transition-colors'>
                      <a href="/rutas">Rutas</a>
                  </li>
                  <li className='hover:text-white transition-colors'>
                      <a href="/favoritos">Favoritos</a>
                  </li>
              </ul>

              {/* 🔹 Botón cerrar menú móvil */}
              <button className='h-[2rem] w-[2rem] flex justify-center items-center mr-4 mt-6 text-[#5aa794]'>
                  <X/>
              </button>
          </div>
      </div>
    </header>
  )
}

export default Navbar
