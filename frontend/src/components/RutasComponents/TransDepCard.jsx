import React from 'react';
import { FaLongArrowAltRight, FaClock, FaBus } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const TransDepCard = ({ startCity, endCity, startPoint, endPoint, travelTime, fare }) => {
  return (
    <div className='shadow-2xl rounded-3xl overflow-hidden transition-transform hover:scale-105 hover:shadow-[#4294C7]/40 duration-300'>
      
      {/* Encabezado */}
      <div className='bg-gradient-to-tr from-[#346530] to-[#4294C7] py-8 px-6 flex flex-col items-center justify-center text-white text-center'>
        <h1 className='text-4xl font-extrabold flex items-center gap-4'>
          <span>{startCity}</span>
          <FaLongArrowAltRight className='text-3xl text-yellow-300 animate-pulse' />
          <span>{endCity}</span>
        </h1>
        <p className='text-gray-200 mt-3 text-sm uppercase tracking-widest font-light'>
          Conexión interdepartamental directa
        </p>
      </div>

      {/* Contenido */}
      <div className='bg-[#1A1A1A] text-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        
        {/* Columna izquierda */}
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3 text-lg font-medium'>
            <FaClock className='text-[#4294C7] text-xl' />
            <span className='text-gray-300'>
              Duración del viaje: <span className='text-white font-semibold'>{travelTime}</span>
            </span>
          </div>

          <div className='flex items-center gap-3 text-lg font-medium'>
            <FaBus className='text-[#5aa794] text-xl' />
            <span className='text-gray-300'>
              Punto de salida: <span className='text-white font-semibold'>{startPoint}</span>
            </span>
          </div>
        </div>

        {/* Columna derecha */}
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3 text-lg font-semibold'>
            <RiMoneyDollarCircleFill className='text-yellow-400 text-2xl' />
            <span className='text-gray-300'>
              Tarifa: <span className='text-white font-bold'>C${fare}</span>
            </span>
          </div>

          <div className='flex items-center gap-3 text-lg font-medium'>
            <FaBus className='text-[#5aa794] text-xl' />
            <span className='text-gray-300'>
              Punto de llegada: <span className='text-white font-semibold'>{endPoint}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pie de card */}
      <div className='bg-gradient-to-r from-[#4294C7]/10 to-[#346530]/10 py-3 text-center text-sm text-gray-400 font-light'>
        Servicio verificado • Rutas actualizadas
      </div>
    </div>
  );
};

export default TransDepCard;
