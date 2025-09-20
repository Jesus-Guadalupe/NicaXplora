import React from 'react'
import SliderLugares from './SliderLugares'

const CardDepartamento = () => {
  return (
    <div className='w-11/12 flex flex-row justify-center items-center'>
              <div className=' bg-slate-50 w-11/12 p-[4rem] rounded-lg shadow-xl flex flex-col justify-between'>
    
                  <div className='flex flex-row justify-between'>
                      <div className='flex flex-col justify-between w-full max-w-[45rem]'>
    
                        <div>
                            <h1 className='font-bold text-4xl'>
                              {/*Nombre del departamento*/}
                            </h1>
                            <p className='text-slate-500 mt-2 text-lg'>
                              {/*Descripción del departamento*/}
                            </p>
                        </div>
    
                        <div className='flex flex-row justify-between mt-4 items-center'>
                        
                            <div className='flex-row flex items-center'>
                              <IoIosStar color='#21441e' className='size-8'/>
                              <p className='font-medium ml-2 text-3xl'>{/*Valoración de lugar*/}</p>
                            </div>
                        
                            <div className='flex flex-row items-center'>
                              <PiMapPinFill color='#21441e' className='size-8'/>
                              <p className='text-2xl font-thin ml-2'>{/*Distancia desde posición actual*/}</p>
                            </div>
                        
                        </div>
    
                      </div>
    
                      <img src="/Granada.jpg" alt=""  className='w-1/3 rounded-lg'/>
                  </div>
    
                    <SliderLugares/>
    
              </div>
          </div>
  )
}

export default CardDepartamento