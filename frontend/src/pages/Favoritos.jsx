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

    {/*=========== HEADER FAVORITOS ========== */}
    <div
      className="relative mt-10 h-[42rem] flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5636574/pexels-photo-5636574.jpeg')"
      }}
    >


      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-6xl font-sans font-medium drop-shadow-lg">
          Mis favoritos
        </h1>
        <p className="font-thin text-xl mt-4 max-w-2xl">
          Destinos que has guardado para visitar
        </p>
      </div>
    </div>

    {/*============= SEGUNDA SECTION FAVORITOS ========== */}
    <div className="min-h-screen h-auto p-[8rem] w-full bg-transparent">
      <DashFavorites/>

      {/* BOTONES DE FILTRO */}
      <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Mostrar componente "No se encontraron favoritos" */}
      {Cards.length === 0 && <NotFavorites/>}

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-8 pb-[8rem]">
          {/*======= ACÁ VAN LAS CARDS ======== */}
          {/* Ejemplo:
          {Cards.map((card, i) => (
            <CardHome key={i} {...card} />
          ))} */}
        </div>
      </div>
    </div>
  </>
}

export default Favoritos
