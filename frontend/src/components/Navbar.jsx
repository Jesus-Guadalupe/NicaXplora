import React from 'react'
import { CircleUser, TextAlignJustify, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Borra el usuario
    navigate("/"); // Redirige al login
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // 🔹 Fondo oscuro del navbar
    <header className='bg-[#141414] fixed top-0 w-screen z-50 shadow-lg'>
      <div className='flex justify-around flex-row items-center border-b border-gray-700 py-6'>
          
          {/* 🔹 Logo */}
          <div>
            <img 
              src="/Logo-nicaxplora-blanco.png" 
              alt="Logo NicaXplora"  
              className='w-[40%] px-4 lg:w-[40%] lg:px-0'
            />
          </div>

          {/* 🔹 Menú principal con texto en verde (#5aa794) */}
          <div className='hidden md:opacity-100 md:block'>
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
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} id='toggle' className='flex md:hidden lg:hidden mr-8 text-[#5aa794]'>
            <TextAlignJustify />
          </button>

      </div>

      {/* 🔹 Menú desplegable en móviles con fondo oscuro */}
      {isMenuOpen && (
        <div id='nav-toggle' className='bg-[#111111] w-full h-[65vh]'>
            <div className='flex justify-between p-4'>
                <ul className='flex flex-col text-[#5aa794] gap-2 font-medium text-3xl  mt-4'>
                    <div 
                      onClick={handleLogout} 
                      className='flex flex-row items-center cursor-pointer hover:translate-y-[-2px] hover:shadow-xl p-4 hover:bg-[#3a835b] hover:text-white mt-6'
                    >
                        <CircleUser className='text-[#5aa794]' />
                        <h1 className='ml-2 font-medium'>
                          <span>Cerrar sesión</span>
                        </h1>
                    </div>

                    <a href="/homepage">
                      <li className='hover:text-white transition-colors w-screen p-4 hover:bg-[#21441e]'>
                          Inicio
                      </li>
                    </a>

                    <a href="/Destinos">
                      <li className='hover:text-white transition-colors w-screen p-4 hover:bg-[#21441e]'>
                          Destinos
                      </li>
                    </a>

                    <a href="/rutas">
                    <li className='hover:text-white transition-colors w-screen p-4 hover:bg-[#21441e]'>
                        Rutas
                    </li>
                    </a>

                    <a href="/favoritos">
                    <li className='hover:text-white transition-colors w-screen p-4 hover:bg-[#21441e]'>
                        Favoritos
                    </li>
                    </a>

                    <div className='flex flex-row text-white gap-8 mt-2 text-3xl p-4'>
                                <a href="https://www.instagram.com/nicaxplora/?igsh=MTl3ZTl6NDZlZnQweg%3D%3D#" target="_blank" >
                                    <RiInstagramFill color='#5aa794' className='hover:cursor-pointer hover:shadow-md hover:translate-y-[-4px] transition-all' />
                                </a>
                    
                                <a href="https://www.facebook.com/share/1APB7nv5aP/" target='_blank'>
                                <FaFacebook color='#5aa794' className='hover:cursor-pointer hover:shadow-md hover:translate-y-[-4px] transition-all'/>
                                </a>
                                
                                <a href="https://www.tiktok.com/@nicaxplora0?_t=ZM-90YQz5qZohH&_r=1" target='_blank'>
                                <FaTiktok color='#5aa794' className='hover:cursor-pointer hover:shadow-md hover:translate-y-[-4px] transition-all'/>
                                </a>
                      </div>
                </ul>

                {/* 🔹 Botón cerrar menú móvil */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='h-[2rem] w-[2rem] absolute top-16 right-2 mr-4 mt-6 text-[#5aa794]'>
                    <X />
                </button>
            </div>
        </div>
      )}

    </header>
  )
}

export default Navbar
