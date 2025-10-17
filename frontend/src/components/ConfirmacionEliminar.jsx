import React from 'react'
import { LuHeartCrack } from "react-icons/lu";
import { FaHeartBroken } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const ConfirmacionEliminar = () => {

  return (
    <div className=' fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4 hidden'>
        <div className='bg-[#111111] h-[65vh] md:h-[65vh] lg:h-[60vh] w-[50vh] rounded-md p-8 flex flex-col items-center justify-center relative'>
                <button className='absolute top-5 right-5 mb-4 active:translate-y-[2px] transition-all'>
                    <IoMdCloseCircle  size={30}/>
                </button>
            <h1 className='text-white text-2xl font-semibold text-center pt-4'>¿Estás seguro de eliminar este destino de tus favoritos?</h1>
            <div className='bg-[#162D13] w-[8rem] h-[8rem] p-8 rounded-full flex justify-center items-center mt-8'>
                <LuHeartCrack size={100} color='#4BBA3F'/>
            </div>
                <p className='text-[#4BBA3F] mt-2 mb-10 font-semibold'>Eliminarás un destino de tus favoritos</p>
                <button 
                className='bg-[#d45959] text-white w-11/12 p-5 md:py-5 lg:py-3 rounded-md hover:bg-red-800 active:translate-y-[2px] transition-all text-sm font-medium mt-2 flex items-center gap-2 justify-center'>
                    <FaHeartBroken/> Eliminar
                </button>
                <button 
                className='bg-[#4BBA3F] text-white w-11/12 p-5 md:py-5 lg:py-3 rounded-md hover:bg-emerald-900 active:translate-y-[2px] transition-all text-sm font-medium mt-2 flex items-center gap-2 justify-center'>
                    Cancelar
                </button>
            </div>
    </div>
  )
}

export default ConfirmacionEliminar