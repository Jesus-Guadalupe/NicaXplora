import React from 'react'
import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const UrbanTransCard = () => {
  return (

      <div className='shadow-2xl rounded-2xl '>
            <div className='bg-gradient-to-tl from-[#4294C7] to-[#346530] p-8 flex flex-row items-center gap-6 text-white font-bold text-4xl justify-between rounded-t-xl'>
                <div>
                    <h1>Managua</h1>
                    <p className='font-thin text-lg py-2'>Capital con el sistema de transporte max extenso</p>
                    <div className='flex items-center gap-2'>
                    <RiMoneyDollarCircleFill />
                    <p className='text-lg'>
                        C$5
                    </p>
                     </div>
                </div>
    
                <div>
                    <MdLocationCity className='size-28 opacity-50' />  
                </div>
            </div>
                                
                            {/*============CONTENIDO DE CARD========== */}
            <div className='flex gap-5 flex-row items-center justify-items-center lg:flex lg:flex-col justify-center lg:gap-10 py-20 px-4 rounded-b-xl'>
                                
                    <div className='bg-slate-50 shadow-lg lg:flex items-center gap-3 py-6 px-6 w-11/12'>
                            <div className='bg-[#346530] rounded-full text-white font-semibold p-4 justify-items-center'>
                                <h1>110</h1> {/*NUMERO-RUTA*/}
                            </div>
    
                            <div className='direccion '>
                                Mercado Horiental - villa fontana {/*dirección*/}
                            </div>
    
                            <div className='font-light'>
                                Pasa por:Centro Comercial Managua, UCA, Rotonda Bello Horizonte. {/*Paradas*/}
                            </div>
    
                            <div className='bg-[#4294C7] text-white p-2 rounded-xl font-semibold'>
                                <h1>Cada 10-15min</h1> {/*Recurrencia*/}
                            </div>
                    </div>
            </div>
        </div>
  )
}

export default UrbanTransCard