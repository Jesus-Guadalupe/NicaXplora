import React from 'react'
import { CircleUser, TextAlignJustify, X } from 'lucide-react'

const Navbar = () => {
  return <header className='bg-[#ffffff] fixed top-0 w-screen z-10'>
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

        <a href="/" className='hidden md:flex lg:flex'>
        <div className='flex flex-row cursor-pointer hover:translate-y-[-2px] hover:shadow-xl p-2 rounded-md'>
            <CircleUser color="#21441e" />
            <h1 className='ml-2 font-medium text-[#21441e]'>
                    <span>Usuario</span>
            </h1>
        </div>

        </a>

        <button id='toggle' className='flex md:hidden lg:hidden mr-4'>
        <TextAlignJustify className=''/>
        </button>
    </div>

        <div id='nav-toggle' className='bg-white w-full h-screen hidden'>
            <div className='flex justify-between p-4'>
                <ul className='flex flex-col text-[#21441e] gap-6 font-medium text-3xl ml-4 mt-4'>
                    <a href="/" className=''>
                            <div className='flex flex-row items-center cursor-pointer hover:translate-y-[-2px] hover:shadow-xl p-2 rounded-md'>
                                <CircleUser color="#21441e" />
                                <h1 className='ml-2 font-medium text-[#21441e]'>
                                        <span>Usuario</span>
                                </h1>
                            </div>
                    </a>

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

                <button className='h-[2rem] w-[2rem] flex  justify-center items-center mr-4 mt-6'>
                    <X/>
                </button>
            </div>
        </div>
  </header>
}

export default Navbar
