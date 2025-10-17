import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Servicios = () => {
  return (
      <div>
      <Navbar/>

     {/* img servicios */}
        <div
        className="relative mt-10 h-[42rem] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('img-Servicios.jpg')" }}
      > 
        {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/30"></div>
        {/* Header Servicios */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-6xl font-sans font-medium drop-shadow-lg">Servicios de reserva</h1>
          <p className="font-thin text-xl mt-4 max-w-2xl">Reserva un viaje con nosotros</p>
        </div>
      </div>


      <div className='min-h-screen h-auto flex justify-center items-center bg-black/30'>
            <div className='bg-[#1a1a1a] h-[80vh] w-10/12 rounded-xl flex flex-col lg:flex-row q'>

                <div className='m-9 flex flex-col justify-center w-10/12 text-white'>
                    <h1 className='text-4xl font-bold text-white mb-6'>Contáctanos para reservar tu viaje</h1>

                    <h1 className=''>Nombre</h1>
                    <input type="text" placeholder='nombre' className='w-11/12 mt-4 h-10 rounded-md bg-[#262323ff] py-4 border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]' />

                    <h1 className=''>Numero telefónico</h1>
                    <input type="tel" pattern="[0-9]{4}-[0-9]{4}" placeholder='Numero telefónico' className='w-11/12 py-4 mt-4 h-10 rounded-md bg-[#262323ff] border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]' />

                    <h1 className=''>Correo Electrónico</h1>
                    <input type="email" placeholder='Email' className='w-11/12 mt-4 h-10 rounded-md bg-[#262323ff] py-4 border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]' />

                    <h1 className=''>Mensaje</h1>
                    <textarea placeholder='Breve descripción de su viaje' className='w-11/12 mt-4 h-[20%] rounded-md py-4 bg-[#262323ff] border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]'>
                       
                    </textarea>
                </div>

    
                    <img src="/Bus-Nica.jpg"className='object-cover w-[45%] rounded-r-xl lg:block md:hidden hidden' alt="" />
                

            </div>

      </div>
        <Footer/>
        </div>
  )
}

export default Servicios