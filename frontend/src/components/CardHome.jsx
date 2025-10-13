import React from 'react'
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { useState } from 'react';
import { Children } from 'react';


const CardHome = ({ name, city, description, image, category, 
  activities, entryPrice, openingHours, children }) => {
  const [verMas, setVerMas] = useState(false);


  return (
    <div 
      className='rounded-xl max-w-[24rem] min-w-72 shadow-lg cursor-pointer hover:translate-y-[-4px] transition-all relative'
      style={{ backgroundColor: "#1A1A1A" }} // Fondo negro profundo
    >

      {/* Ciudad */}
      <div className='py-2 px-4 rounded-full absolute top-2 left-2' style={{ backgroundColor: "#21441e" }}>
        <p className='text-white font-medium'>{city}</p>
      </div>

      {/* Imagen */}
      <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-t-xl'/>

      {/* Contenido */}
      <div className='p-4 rounded-b-xl flex flex-col gap-2'>

        {/* Nombre */}
        <h1 className='text-2xl md:text-3xl font-sans font-semibold text-white'>{name}</h1>

        {/* Categoría */}
        <p className='text-sm font-medium' style={{ color: "#5aa794" }}>
          Categoría: <span className='font-normal text-white'>{category}</span>
        </p>

        {/* Actividades */}
        <p className='text-sm font-medium' style={{ color: "#5aa794" }}>
          Actividades: <span className='font-normal text-white'>{activities}</span>
        </p>

                  {/*Controla la vista de la descripcion en las card de destinos */}
                  <p className="mt-2 text-white/80">
                  {verMas ? description : `${description.slice(0, 100)}...`}
                  </p>
                    <button
                      onClick={() => setVerMas(!verMas)}
                      className="text-[#5aa794] font-medium mt-1 text-sm hover:underline"
                    >
                      {verMas ? "Ver menos" : "Ver más"}
                    </button> 

        {/* Precios y horarios */}
        <div className='flex flex-row justify-between mt-2 text-sm md:text-base' style={{ color: "#5aa794" }}>
          <p>Precio: <span className='font-medium text-white'>${entryPrice}</span></p>
          <p>Horario: <span className='font-medium text-white'>{openingHours}</span></p>
        </div>

        {/* Footer con íconos (estrellas y ubicación) */}
        <div className='flex flex-row justify-between mt-4'>
          <div className='flex flex-row items-center'>

          </div>
          <div className='flex flex-row items-center'>
            <PiMapPinFill color='#5aa794' className='scale-125'/>
            <p className='text-sm font-thin text-white'>{city}</p>
          </div>
        </div>

        {/* Se renderiza children */}
        {children}

      </div>
    </div>
  );
}

export default CardHome;
