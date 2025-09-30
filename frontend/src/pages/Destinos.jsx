import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import SliderLugares from '../components/DestinosComponents/SliderLugares';


const Destinos = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/destinos") // endpoint backend
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error("Error cargando destinos:", err));
  }, []);

  return (
    <>
      <Navbar/>

      {/* Header */}
      <div className='mt-10 bg-gradient-to-t from-[#4294C7] to-[#21441E] h-[40rem] flex justify-center items-center text-center'>
        <div className='flex flex-col justify-center items-center text-white'>
          <h1 className='text-6xl font-bold tracking-wide'>
            Descubre Nicaragua por Departamentos
          </h1>
          <p className='font-light text-xl mt-4 max-w-xl'>
            Explora los mejores destinos organizados por regiones y encuentra actividades, horarios y precios.
          </p>
        </div>
      </div>

      {/* Listado dinámico */}
      <div className='min-h-screen h-auto p-[6rem] flex flex-col gap-12 items-center'>
        {destinos.map(dest => (
          
          <div key={dest.id} className='bg-white w-11/12 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 flex flex-col md:flex-row overflow-hidden'>
            
            {/* Imagen */}
            <div className='md:w-1/3 relative'>
              <img src={dest.image_url} alt={dest.name} className='w-full h-full object-cover'/>
              <span className='absolute top-4 left-4 bg-[#35792f] text-white px-3 py-1 rounded-full font-medium text-sm'>
                {dest.city}
              </span>
              <span className='absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-medium text-sm'>
                {dest.category}
              </span>
            </div>

            {/* Contenido */}
            <div className='md:w-2/3 p-6 flex flex-col justify-between gap-4'>
              <div>
                <h2 className='text-3xl font-bold'>{dest.name}</h2>
                <p className='text-gray-600 mt-2 line-clamp-3'>{dest.description}</p>

                {dest.activities && (
                  <p className='text-gray-500 mt-3 text-sm'>
                    <span className='font-medium'>Actividades:</span> {dest.activities}
                  </p>
                )}
              </div>

              {/* Horarios y precio */}
              <div className='flex justify-between mt-4 text-sm text-gray-700'>
                <span>Horario: {dest.opening_hours}</span>
                <span>Entrada: ${dest.entry_price}</span>
              </div>

              {/* Valoración y ubicación */}
              <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-2'>
                  <IoIosStar color="#facc15" size={20}/>
                  <span className='font-medium'>4.8</span>
                </div>
                <div className='flex items-center gap-2 text-gray-700'>
                  <PiMapPinFill size={20}/>
                  <span>{dest.city}</span>
                </div>
              </div>
            </div>

            {/* Slider de lugares relacionados */}
            <div className='w-full'>
              <SliderLugares destinos={[dest]} />
            </div>
          </div>
        ))}

        <Comentarios/>
      </div>
    </>
  )
}

export default Destinos;
