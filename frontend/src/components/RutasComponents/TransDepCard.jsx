import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaClock, FaBus } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbCalendarTime } from "react-icons/tb";

const TransDepCard = () => {
  return (
    <div className='shadow-2xl rounded-2xl'>
                            {/*==========TITULO CARD ORIGEN - DESTINO==========*/}
                            <div className='bg-gradient-to-tl from-[#4294C7] to-[#346530] py-8 flex flex-row items-center gap-6 text-white font-bold text-4xl justify-center rounded-t-xl'>
                                <h1>Estelí</h1>
                                <FaLongArrowAltRight color='white' className='size-12'/>
                                <h1>León</h1>
                            </div>


                            {/*==========CONTENIDO RELEVANTE SOBRE DESTINO==========*/}
                            <div className='justify-items-center lg:flex justify-center gap-10 py-20 rounded-b-xl'>
    
                                <div className='gap-5 flex flex-col mb-4'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <FaClock className='size-8'/>
                                        <p className='text-xl font-medium'>
                                            3h {/*Tiempo de viaje*/}
                                        </p>
                                    </div>
    
                                    <div className='flex flex-row gap-2 items-center'>
                                        <FaBus className='size-8'/>
                                        <p className='text-xl font-medium'>
                                            Terminal Sur {/*Lugar donde tomar trasporte*/}
                                        </p>
                                    </div>
                                </div>
    
                                <div className='gap-5 flex flex-col'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <RiMoneyDollarCircleFill className='size-8'/>
                                        <p className='text-xl font-medium'>
                                            C$25 {/*Precio del trasporte*/}
                                        </p>
                                    </div>
    
                                    <div className='flex flex-row gap-2 items-center'>
                                        <TbCalendarTime className='size-8'/>
                                        <p className='text-xl font-medium'>
                                            Cada 30min {/*Recurrencia de salida*/}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
  )
}

export default TransDepCard