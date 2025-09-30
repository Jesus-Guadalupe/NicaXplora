import React from 'react'

const BusquedaTransDep = () => {
  return (
    <div className='w-full flex flex-col items-center'>
            
            {/*TITULO DE SECTION */}
                <div className='flex w-10/12 flex-col justify-center'>
                    <h1 className=' text-center lg:text-start font-bold text-4xl lg:text-5xl bg-gradient-to-t from-[#4294C7] to-[#1d3b1a] bg-clip-text text-transparent'>Buses por departamento</h1>
                    <p className='text-xl font-light mt-2 text-center lg:text-start'>Conexiones directas entre las principales ciudades de Nicaragua</p>
                </div>

            {/*============= Buscador de trasporte por departamento========== */}
            <div className='w-full flex flex-col items-center'>
                    <div className='bg-slate-50 shadow-lg w-10/12 flex flex-row gap-4 items-center justify-between p-6 rounded-xl mt-6' style={{ backgroundColor: "#1A1A1A" }}>
                            <div className='w-[40%]'>
                                <p className='font-semibold ml-3'>Desde</p>
                                <select name="Seleccionar Origen" id="" className='w-10/12 border p-4 rounded-lg text-slate-500 focus:outline-[#69c7ba]' style={{ backgroundColor: "#424242" }}>
                                    <option value="">Estelí</option>
                                    <option value="">Granada</option>
                                    <option value="">Ocotal</option>
                                </select>
                            </div>

                            <div className='w-[40%]'>
                                <p className='font-semibold ml-3'>Hasta</p>
                                <select name="Destino" id="" className='w-10/12 border p-4 rounded-lg text-slate-500 focus:outline-[#69c7ba]' style={{ backgroundColor: "#424242" }}>
                                    <option value="">Estelí</option>
                                    <option value="">Granada</option>
                                    <option value="">Ocotal</option>
                                </select>
                            </div>
                            <div className='w-[20%] flex justify-center'>
                                <button className='bg-[#346530] text-white p-4 rounded-lg w-full mt-6 hover:bg-[#1d443e]'>
                                    Buscar
                                </button>
                            </div>
                    </div>
            </div>
        </div>
  )
}

export default BusquedaTransDep