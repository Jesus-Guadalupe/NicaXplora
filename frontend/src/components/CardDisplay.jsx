import React from 'react'
import { RiMapPin2Fill } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoArrowRedoCircle } from "react-icons/io5";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


const CardDisplay = () => {
  return (
    <div className='bg-slate-100 w-[50%] h-auto absolute rounded shadow-lg shadow-black hidden'> {/*==========Oculto por defecto==========*/}
        <button className='absolute top-2 right-2'>
            <IoCloseSharp  size={50}/>
        </button>
        <img src="https://th.bing.com/th/id/R.30baba6a21179bbf9f0a366a57f6a508?rik=V8JICoJPeFdLqA&pid=ImgRaw&r=0" alt="" className='w-full h-[300px] object-cover rounded-t-sm' />

        <div className='flex p-[4rem] flex-col'>
            <div className='text-black font-semibold text-xl'>
                <h1>Granada, Nicaragua: Una joya Colonial a Orillas del Lago Cocibolca</h1>
            </div>
            
            {/*Divisor*/}
            <div className='bg-black w-full h-[2px] mt-4'></div>

            <p className='text-black mt-4'>
                Granada es una de las ciudades más antiguas y pintorescas de América Central, fundada en 1524 por Francisco Hernández de Córdoba. Situada a orillas del Lago Cocibolca (también conocido como Lago de Nicaragua), la ciudad destaca por su arquitectura colonial, calles empedradas y una vibrante vida cultural. Su cercanía a diversos atractivos naturales y volcánicos la convierte en un destino ideal para los amantes de la historia, la naturaleza y la aventura.
            </p>
            

            {/*CARDS LUGARES*/}
            <div className='lugares mt-6 flex flex-row gap-4'>
                <div className='bg-slate-100 shadow-sm shadow-emerald-700 w-[33%] h-[250px] text-black p-4 rounded border-2 border-black'>
                    <h1 className='font-medium'>Volcan Mombacho</h1>
                    <p className='font-light'>información</p>
                </div>

                <div className='bg-slate-100 shadow-sm shadow-emerald-700 w-[33%] h-[250px] text-black p-4 rounded border-2 border-black'>
                    <h1 className='font-medium'>Volcan Mombacho</h1>
                    <p className='font-light'>información</p>
                </div>

                <div className='bg-slate-100 shadow-sm shadow-emerald-700 w-[33%] h-[250px] text-black p-4 rounded border-2 border-black'>
                    <h1 className='font-medium'>Volcan Mombacho</h1>
                    <p className='font-light'>información</p>
                </div>
            </div>

            <h1 className='text-black mt-8 font-semibold text-lg'>Información práctica</h1>
            {/*Divisor*/}
            <div className='bg-black w-full h-[2px] mt-2'></div>

            {/*Información práctica*/}
            <div className='flex justify-between mt-6'>
                <div className='flex flex-row items-center gap-2 mt-4'>
                    <RiMapPin2Fill color='#21441e' size={40}/>
                    <div className='text-[#21441e] font-semibold'>
                        <h1>Ubicación</h1>
                        <p>173km desde Estelí</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-2 mt-4'>
                    <FaClock color='#21441e' size={35}/>
                    <div className='text-[#21441e] font-semibold'>
                        <h1>Mejor época</h1>
                        <p>Noviembre - Abril</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-2 mt-4'>
                    <RiMoneyDollarCircleFill color='#21441e' size={40}/>
                    <div className='text-[#21441e] font-semibold'>
                        <h1>Presupuesto</h1>
                        <p>$30-50 USD/día</p>
                    </div>
                </div>

            </div>

            {/*Botones*/}
            <div className='flex flex-row gap-4 mt-10 justify-center'>
                <button className='bg-[#21441e] py-2 px-8 rounded-lg font-medium flex flex-row items-center gap-2 hover:translate-y-[-4px] hover:bg-[#46a098] transition-all'>
                    <BiSolidCommentDetail /> Ver comentarios
                </button>

                <button className='bg-[#21441e] py-2 px-8 rounded-lg font-medium flex flex-row items-center gap-2 hover:translate-y-[-4px] hover:bg-[#46a098] transition-all'>
                    <IoIosStar/> Agregar a favoritos
                </button>

                <button className='bg-[#46a098] py-2 px-8 rounded-lg font-medium flex flex-row items-center gap-2 hover:translate-y-[-4px] hover:bg-[#c9b354] transition-all'>
                    Cómo llegar<IoArrowRedoCircle size={20}/>
                </button>

            </div>


        </div>
    </div>
  )
}

export default CardDisplay