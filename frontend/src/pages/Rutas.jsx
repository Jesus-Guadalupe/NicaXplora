import React from 'react'
import Navbar from '../components/navbar'
import { GrMapLocation } from "react-icons/gr";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import Transporte from '../components/RutasComponents/Transporte';

const Rutas = () => {
  return <>
    <Navbar/>
    {/*=============PRIMER SECTION DE RUTAS============ */}
    <div className=' mt-10 bg-gradient-to-t from-[#4294C7] to-[#21441E] h-[40rem] flex justify-center'>
        <div className=' flex flex-col justify-center items-center text-white'>

            <h1 className='text-6xl font-sans font-medium text-center'>
              Transporte Nicaragua
            </h1>

            <p className='font-thin text-xl mt-4'>
              Buses interdepartamentales y transporte urbano
            </p>

            <div className='flex justify-center flex-row w-10/12 gap-6 mt-12'>
                  <div className='flex justify-center flex-col items-center'>
                      <GrMapLocation className='size-10' />
                      <div className='text-center mt-2'>
                      <p>25+</p>
                      <p className='font-medium'>Rutas interdepartamentales</p>
                      </div>
                  </div>

                  <div className='flex justify-center flex-col items-center'>
                    <RiMapPin2Fill className='size-10' />
                      <div className='text-center mt-2'>
                      <p>4</p>
                      <p className='font-medium'>Sistemas Urbanos</p>
                      </div>
                  </div>

                  <div className=' ml-6 flex justify-center flex-col items-center'>
                    <IoStar className='size-10' />
                      <div className='text-center mt-2'>
                      <p>5AM-9PM</p>
                      <p className='font-medium'>Horarios</p>
                      </div>
                  </div>
            </div>

        </div>
    </div>

     {/*=============SEGUNDO SECTION DE RUTAS============ */}

     <div className='w-full min-h-screen h-screen'>
          <Transporte/>
     </div>
  </>
}

export default Rutas