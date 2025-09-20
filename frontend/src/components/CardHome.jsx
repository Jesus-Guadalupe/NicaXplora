import React from 'react'
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";


const CardHome = () => {

  return <>
    <div className='bg-slate-300 rounded-xl max-w-[22rem] min-w-72 shadow-lg cursor-pointer hover:translate-y-[-4px] transition-all relative'>

                        <div className='bg-[#35792f] py-2 px-4 rounded-full absolute top-2 left-2'>
                            <p className='text-white'>
                              Ciudad
                            </p>
                          </div>

                          <img src="/Granada.jpg" alt="" className='w-full h-[200px] object-cover rounded-t-xl'/>

                          <div className='bg-white p-4 rounded-b-xl'>

                              <h1 className='text-3xl font-sans font-medium'>
                                {/*Titulo Ciudad*/}
                              </h1>
                              <p className='text-slate-500 pt-4'>
                                {/*Contenido Sobre Ciudad*/}
                              </p>
                              <div className='flex flex-row justify-between mt-4'>

                                    <div className='flex-row flex'>
                                        <IoIosStar color='#21441e' className='scale-150'/>
                                      <p className='font-medium ml-1'>{/*Valoración*/}</p>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                      <PiMapPinFill color='#21441e' className='scale-150'/>
                                      <p className='text-sm font-thin'>{/*Distancia de municipio*/}</p>
                                    </div>

                              </div>

                        </div>
    </div>
  </>
  
}

export default CardHome