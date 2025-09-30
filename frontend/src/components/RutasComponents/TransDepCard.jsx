import React from 'react';
import { FaLongArrowAltRight, FaClock, FaBus } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbCalendarTime } from "react-icons/tb";

const TransDepCard = ({ startCity, endCity, startPoint, endPoint, travelTime, fare }) => {
  return (
    <div className='rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden' 
         style={{ backgroundColor: "#1A1A1A" }}>
      
      {/* TITULO CARD */}
      <div className='bg-gradient-to-tr from-[#4294C7] to-[#1d3b1a] py-6 px-8 flex flex-row items-center gap-4 text-white font-extrabold text-3xl justify-center drop-shadow-md'>
        <h1>{startCity}</h1>
        <FaLongArrowAltRight className='animate-pulse text-2xl' />
        <h1>{endCity}</h1>
      </div>

      {/* CONTENIDO */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-8 text-white'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-3 text-lg font-medium'>
            <FaClock className='text-[#4294C7] text-xl' />
            {travelTime}
          </div>
          <div className='flex items-center gap-3 text-lg font-medium'>
            <FaBus className='text-[#5aa794] text-xl' />
            {startPoint}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-3 text-lg font-semibold'>
            <RiMoneyDollarCircleFill className='text-yellow-500 text-xl' />
            C${fare}
          </div>
          <div className='flex items-center gap-3 text-lg font-medium'>
            <TbCalendarTime className='text-[#5aa794] text-xl' />
            Cada 30min
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransDepCard;
