import React from 'react'
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from 'react';

const CardHome = ({ name, city, description, image, category, 
  activities, entry_price, opening_hours }) => {

  //useState para boton de favoritos
      const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className='bg-slate-300 rounded-xl max-w-[24rem] min-w-72 shadow-lg cursor-pointer hover:translate-y-[-4px] transition-all relative'>

      {/* Ciudad */}
      <div className='bg-[#35792f] py-2 px-4 rounded-full absolute top-2 left-2'>
        <p className='text-white font-medium'>{city}</p>
      </div>

      {/*FUNCIONALIDAD DE BOTON FAVORITOS */}
      <div className='absolute top-4 right-4'>
        <button onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite? (<FaHeart size={30} color='#35792f'/>) : (<FaRegHeart size={30} color='#35792f'/>)}
        </button>
      </div>

      {/* Imagen */}
      <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-t-xl'/>

      {/* Contenido */}
      <div className='bg-white p-4 rounded-b-xl flex flex-col gap-2'>

        {/* Nombre */}
        <h1 className='text-2xl md:text-3xl font-sans font-semibold'>{name}</h1>

        {/* Categoría */}
        <p className='text-sm text-[#21441e] font-medium'>Categoría: <span className='font-normal'>{category}</span></p>

        {/* Actividades */}
        <p className='text-sm text-[#21441e] font-medium'>Actividades: <span className='font-normal'>{activities}</span></p>

        {/* Descripción */}
        <p className='text-slate-500 text-sm md:text-base'>{description}</p>

        {/* Precios y horarios */}
        <div className='flex flex-row justify-between mt-2 text-sm md:text-base text-[#21441e]'>
          <p>Precio: <span className='font-medium'>${entry_price}</span></p>
          <p>Horario: <span className='font-medium'>{opening_hours}</span></p>
        </div>

        {/* Footer con íconos (estrellas y ubicación) */}
        <div className='flex flex-row justify-between mt-4'>
          <div className='flex flex-row items-center'>
            <IoIosStar color='#21441e' className='scale-125'/>
            <p className='font-medium ml-1'>{/*Valoración futura*/}</p>
          </div>
          <div className='flex flex-row items-center'>
            <PiMapPinFill color='#21441e' className='scale-125'/>
            <p className='text-sm font-thin'>{city}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardHome;
