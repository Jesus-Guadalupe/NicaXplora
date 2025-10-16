import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#111111] h-[15rem] flex justify-center items-center'>
        {/*Texto Footer*/}
        <div className='text-white flex flex-col items-center'>
            <h1 
            className='font-bold text-xl mb-2'>
                App creada por equipo creativo NicaXplora
            </h1>
            <p>Siguenos en nuestras redes!</p>

        {/*Iconos redes sociales*/}
        <div className='flex flex-row text-white gap-6 ml-4 mt-4 text-3xl p-4'>
            <a href="https://www.instagram.com/nicaxplora/?igsh=MTl3ZTl6NDZlZnQweg%3D%3D#" target="_blank" >
                <RiInstagramFill className='hover:cursor-pointer hover:shadow-md hover:shadow-emerald-500 hover:translate-y-[-4px] transition-all' />
            </a>

            <a href="https://www.facebook.com/share/1APB7nv5aP/" target='_blank'>
            <FaFacebook className='hover:cursor-pointer hover:shadow-md hover:shadow-emerald-500 hover:translate-y-[-4px] transition-all'/>
            </a>
            
            <a href="https://www.tiktok.com/@nicaxplora0?_t=ZM-90YQz5qZohH&_r=1" target='_blank'>
            <FaTiktok className='hover:cursor-pointer hover:shadow-md hover:shadow-emerald-500 hover:translate-y-[-4px] transition-all'/>
            </a>
        </div>

        </div>

    </div>
  )
}

export default Footer