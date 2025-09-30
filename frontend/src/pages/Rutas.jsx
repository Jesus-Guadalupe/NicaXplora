import React from 'react';
import Navbar from '../components/navbar';
import { GrMapLocation } from "react-icons/gr";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import Transporte from '../components/RutasComponents/Transporte';

const Rutas = () => {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <div className='mt-10 bg-gradient-to-tr from-[#4294C7] via-[#69C7BA] to-[#21441E] h-[40rem] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-white gap-6 text-center px-6'>
          <h1 className='text-6xl font-extrabold drop-shadow-lg tracking-tight animate-fade-in'>
            Transporte Nicaragua
          </h1>
          <p className='font-light text-xl max-w-2xl animate-fade-in delay-200'>
            Buses interdepartamentales y transporte urbano
          </p>

          <div className='flex justify-center flex-wrap gap-8 mt-12'>
            {[{
              icon: <GrMapLocation className='text-5xl mb-3 text-[#21441E]' />,
              count: "25+",
              label: "Rutas interdepartamentales"
            },{
              icon: <RiMapPin2Fill className='text-5xl mb-3 text-[#21441E]' />,
              count: "4",
              label: "Sistemas Urbanos"
            },{
              icon: <IoStar className='text-5xl mb-3 text-[#21441E]' />,
              count: "5AM-9PM",
              label: "Horarios"
            }].map((item, index) => (
              <div key={index} className='flex flex-col items-center bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl hover:translate-y-[-4px]'>
                {item.icon}
                <p className='text-3xl font-bold'>{item.count}</p>
                <p className='font-medium text-center text-gray-100 mt-1'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCION TRANSPORTE */}
      <div className='w-full min-h-screen px-6 py-12 bg-transparent'>
        <Transporte />
      </div>
    </>
  );
}

export default Rutas;
