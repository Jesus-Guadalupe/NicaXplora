import React from 'react'
import { Link } from 'react-router';
import { useState } from 'react';
import BusquedaTransDep from './BusquedaTransDep';
import TransDepCard from './TransDepCard';
import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import UrbanTransCard from './UrbanTransCard';


//Componentes de Transporte Interdepartamental
function TransDep({ onSwitch }) {
  return (
    <div className='w-full min-h-screen h-screen flex justify-center justify-items-center'>
        <div className='w-10/12 flex flex-col mt-[8rem]'>
            <div className='w-full flex items-center flex-col mb-4'>
                <div className="p-6 rounded-xl w-2/5 text-center">

                {/*=========GESTOR DE SECTION TIPO TRASPORTE==========*/}
                    <div className='flex flex-row rounded-full shadow-md'>
                        <button className="w-full bg-[#346530] text-white py-2 rounded-l-2xl">
                            Transporte interdepartamental
                        </button>

                        <button onClick={onSwitch} className="w-full border-2 border-l-0 text-[#346530] hover:bg-slate-300 rounded-r-2xl py-2 transition-all">
                            Transporte Urbano
                        </button>
                    </div>
                    
                </div>
            </div>

            <BusquedaTransDep/>

            <div className='flex flex-col items-center w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] mt-8 pb-[8rem] w-10/12'>

                    {/*=========== CARDS DE TRASPORTE POR DEPARTAMENTO======== */}

                    {/*Ejemplo de card de trasporte por departamento*/}
                    <TransDepCard/>

                </div>
            </div>


        </div>
    </div>
  );
}

// Componente de Rutas Urbanas
function TransUrb({ onSwitch }) {
  return (
    <div className='w-full min-h-screen h-screen flex justify-center justify-items-center'>
        <div className='w-10/12 flex flex-col mt-[8rem]'>
            <div className='w-full flex items-center flex-col mb-4'>
                <div className="p-6 rounded-xl w-2/5 text-center">

                    {/*=========GESTOR DE SECTION TIPO TRASPORTE==========*/}
                    <div className='flex flex-row rounded-full shadow-md'>
                        <button onClick={onSwitch} className="w-full text-[#346530] hover:bg-slate-300 py-2 rounded-l-2xl border-2 border-r-0">
                            Transporte interdepartamental
                        </button>

                        <button className="w-full border-2 border-l-0 bg-[#346530] text-white rounded-r-2xl py-2 transition-all">
                            Transporte Urbano
                        </button>
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-center w-full'>
                    <div className='w-full flex flex-col items-center'>
                            {/*TITULO DE SECTION */}
                            <div className='flex w-10/12 flex-col justify-center'>
                                <h1 className=' text-center lg:text-start font-bold text-4xl lg:text-5xl bg-gradient-to-t from-[#4294C7] to-[#1d3b1a] bg-clip-text text-transparent'>Buses por departamento</h1>
                                <p className='text-xl font-light mt-2 text-center lg:text-start'>Conexiones directas entre las principales ciudades de Nicaragua</p>
                            </div>
                    </div>

                <div className='grid grid-cols-1 gap-[3rem] mt-8 pb-[8rem] w-10/12'>
                    {/*============= CARDS DE TRASPORTE URBANO========= */}

                    {/*Ejemplo de card de trasporte urbano */}
                    <UrbanTransCard/>
                        
                </div>

            </div>


        </div>
    </div>

  );
}

// Manejo de Transporte
export default function Transporte() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isActive ? (
        <TransDep onSwitch={() => setIsActive(false)} />
      ) : (
        <TransUrb onSwitch={() => setIsActive(true)} />
      )}
    </div>
  );
}