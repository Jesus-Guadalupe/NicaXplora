import React from 'react';
import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";

const UrbanTransCard = ({ startPoint, endPoint, City, travelTime, fare }) => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='shadow-2xl rounded-3xl overflow-hidden transition-transform hover:scale-105 hover:shadow-[#4294C7]/50 duration-300'>

        {/* Encabezado */}
        <div className='bg-gradient-to-tr from-[#346530] to-[#4294C7] p-8 flex flex-row justify-between items-center text-white font-bold rounded-t-3xl'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl flex items-center gap-2'>
              <MdLocationCity className='text-yellow-300 text-4xl' /> {City}
            </h1>
            <p className='font-light text-gray-100 text-sm'>
              Sistema público de transporte urbano con cobertura en toda la ciudad
            </p>
            <div className='flex items-center gap-2 mt-3'>
              <RiMoneyDollarCircleFill className='text-yellow-300 text-xl' />
              <p className='text-lg font-semibold'>C${fare}</p>
            </div>
          </div>
          <div className='bg-white/20 rounded-full p-5'>
            <FaBus className='text-5xl text-white' />
          </div>
        </div>

        {/* Contenido de rutas */}
        <div className='bg-[#1A1A1A] p-6 flex flex-col gap-6'>
          <div className='bg-[#141414] shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-4 border border-[#346530]/40'>

            <div className='flex items-center gap-4'>
              <div className='bg-[#346530] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl'>
                <MdLocationCity />
              </div>
              <div>
                <h2 className='font-semibold text-xl text-white'>{endPoint}</h2>
                <p className='text-gray-400 text-sm'>
                  Su recorrido inicia en <span className='text-[#4294C7]'>{startPoint}</span>
                </p>
              </div>
            </div>

            <div className='bg-gradient-to-r from-[#4294C7] to-[#346530] text-white rounded-xl py-2 px-4 font-semibold text-center shadow-md'>
              Cada {travelTime}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanTransCard;
