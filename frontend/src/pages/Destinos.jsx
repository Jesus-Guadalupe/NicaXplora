import React from 'react'
import Navbar from '../components/navbar'
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import SliderLugares from '../components/DestinosComponents/SliderLugares';

const Destinos = () => {
  
  function simpleSlider(){
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  }

  return <>
    <Navbar/>

    {/*==========PRIMERA SECTION DE DESTINOS========= */}
    <div className=' mt-10 bg-gradient-to-t from-[#4294C7] to-[#21441E] h-[40rem] flex justify-center'>
        <div className=' flex flex-col justify-center items-center text-white'>

            <h1 className='text-6xl font-sans font-medium'>
              Descubre Nicaragua por Departamentos
            </h1>

            <p className='font-thin text-xl mt-4'>
              Explora los mejores destinos organizados por regiones
            </p>
        </div>
    </div>

    {/*=============SEGUNDA SECTION DE DEStINOS========== */}

    <div className='min-h-screen h-auto p-[8rem] flex justify-center'>

      <div className='w-11/12 flex flex-col justify-center items-center gap-8'>

          <div className=' bg-slate-50 w-11/12 p-[4rem] rounded-lg shadow-xl flex flex-col justify-between'>
              <div className='flex flex-row justify-between'>
                  <div className='flex flex-col justify-between w-full max-w-[45rem]'>

                    <div>
                        <h1 className='font-bold text-4xl'>
                          Granada
                        </h1>
                        <p className='text-slate-500 mt-2 text-lg'>
                          Descripcion breve de la ciudad
                        </p>
                    </div>

                    <div className='flex flex-row justify-between mt-4 items-center'>
                    
                        <div className='flex-row flex items-center'>
                          <IoIosStar color='#21441e' className='size-8'/>
                          <p className='font-medium ml-2 text-3xl'>4.8</p>
                        </div>
                    
                        <div className='flex flex-row items-center'>
                          <PiMapPinFill color='#21441e' className='size-8'/>
                          <p className='text-2xl font-thin ml-2'>171km desde Estelí</p>
                        </div>
                    
                    </div>

                  </div>

                  <img src="/Granada.jpg" alt=""  className='w-1/3 rounded-lg'/>
              </div>

              <SliderLugares/>
          </div>
          
      </div>





    </div>
  </>
}

export default Destinos