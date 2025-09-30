import React from 'react'
import Navbar from '../components/navbar'
import NotFavorites from '../components/NotFavorites';
import DashFavorites from '../components/DashFavorites';
import { useState } from 'react';
import FilterButtons from '../components/FilterButtons';
import CardHome from '../components/CardHome';

const Favoritos = () => {
  const [activeFilter, setActiveFilter] = useState("Favoritos")
  const [Cards, setCards] = useState([])

  return <>
    <Navbar/>

    {/*===========PRIMER SECTION FAVORITOS========== */}
    <div className=' mt-10 bg-gradient-to-t from-[#4294C7] to-[#21441E] h-[40rem] flex justify-center'>
        <div className=' flex flex-col justify-center items-center text-white' >

            <h1 className='text-6xl font-sans font-medium'>
              Mis favoritos
            </h1>

            <p className='font-thin text-xl mt-4'>
              Destinos que has guardado para visitar
            </p>
        </div>
    </div>

    {/*=============SEGUNDA SECTION FAVORITOS========== */}
    <div className=' min-h-screen h-screen p-[8rem] w-full' >
      <DashFavorites/>

          {/*BOTONES DE FILTRO*/}
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          {/*======MOSTRAR COMPONENTE "No se encontraron favoritos"=========*/}
            {Cards.length === 0 && <NotFavorites/>}

            <div className='flex flex-col items-center' >
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-8 pb-[8rem]' >
                
                {/*=======ACÁ VAN LAS CARDS======== */}
                  
              </div>
            </div>
          
          
    </div>
  </>
}

export default Favoritos