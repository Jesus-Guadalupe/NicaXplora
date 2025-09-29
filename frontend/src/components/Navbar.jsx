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
    <header className='bg-[#ffffff] fixed top-0 w-screen z-10'>
      <div className='flex justify-around flex-row items-center border-b-2 py-8'>
          <div className='text-[#21441e]'>Logo</div>

          <div className='opacity-0 md:opacity-100'>
              <ul className='flex flex-row text-[#21441e] gap-6 font-medium text-lg'>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/homepage">
                          <span>Inicio</span>
                      </a>
                  </li>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/Destinos">
                          <span>Destinos</span>
                      </a>
                  </li>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/rutas">
                          <span>Rutas</span>
                      </a>
                  </li>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/favoritos">
                          <span>Favoritos</span>
                      </a>
                  </li>
              </ul>
          </div>

          {/* Botón de cerrar sesión */}
          <div onClick={handleLogout} className='hidden md:flex lg:flex cursor-pointer'>
            <div className='flex flex-row hover:translate-y-[-2px] hover:shadow-xl p-2 rounded-md'>
                <CircleUser color="#21441e" />
                <h1 className='ml-2 font-medium text-[#21441e]'>
                        <span>Cerrar sesión</span>
                </h1>
            </div>
          </div>

          <button id='toggle' className='flex md:hidden lg:hidden mr-4'>
            <TextAlignJustify className=''/>
          </button>
      </div>

      <div id='nav-toggle' className='bg-white w-full h-screen hidden'>
          <div className='flex justify-between p-4'>
              <ul className='flex flex-col text-[#21441e] gap-6 font-medium text-3xl ml-4 mt-4'>
                  <div onClick={handleLogout} className='flex flex-row items-center cursor-pointer hover:translate-y-[-2px] hover:shadow-xl p-2 rounded-md'>
                      <CircleUser color="#21441e" />
                      <h1 className='ml-2 font-medium text-[#21441e]'>
                              <span>Cerrar sesión</span>
                      </h1>
                  </div>

                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/homepage">
                          <span>Inicio</span>
                      </a>
                  </li>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/Destinos">
                          <span>Destinos</span>
                      </a>
                  </li>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/rutas">
                          <span>Rutas</span>
                      </a>
                  </li>
                  <li className='hover:text-[#5aa794] transition-all'>
                      <a href="/favoritos">
                          <span>Favoritos</span>
                      </a>
                  </li>
              </ul>

              <button className='h-[2rem] w-[2rem] flex justify-center items-center mr-4 mt-6'>
                  <X/>
              </button>
          </div>
      </div>
    </header>
  )
}

export default Navbar
