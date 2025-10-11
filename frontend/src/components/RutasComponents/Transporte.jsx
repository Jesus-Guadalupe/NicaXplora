import React, { useState, useEffect } from 'react';
import BusquedaTransDep from './BusquedaTransDep';
import TransDepCard from './TransDepCard';
import UrbanTransCard from './UrbanTransCard';

function TransDep({ onSwitch }) {
  const [rutasInterlocales, setRutasInterlocales] = useState([]);
  const [filtro, setFiltro] = useState({ origen: '', destino: '' });

  useEffect(() => {
    fetch("http://localhost:3100/TranspInterlocal")
      .then(res => res.json())
      .then(data => setRutasInterlocales(data))
      .catch(err => console.error(err))
  }, []);

  // Filtrado según selección
  const rutasFiltradas = rutasInterlocales.filter(ruta => {
    const matchOrigen = filtro.origen ? ruta.start_city === filtro.origen : true;
    const matchDestino = filtro.destino ? ruta.end_city === filtro.destino : true;
    return matchOrigen && matchDestino;
  });

  return (
    <div className='w-full flex justify-center py-12 bg-transparent'>
      <div className='w-10/12 flex flex-col gap-8 bg-black/50 p-8 rounded-xl'>

        {/* Botones de cambio de transporte */}
        <div className="flex justify-center">
          <div className='flex flex-row rounded-full shadow-xl overflow-hidden'>
            <button className="w-full bg-[#346530] text-white py-3 px-6 font-semibold hover:bg-[#21441E] transition-colors">
              Transporte Interdepartamental
            </button>
            <button onClick={onSwitch} className="w-full border-2 border-l-0 text-[#5aa794] hover:bg-[#1a1a1a] py-3 px-6 font-semibold transition-colors">
              Transporte Urbano
            </button>
          </div>
        </div>

        {/* Barra de filtros */}
        <BusquedaTransDep onFilter={(origen, destino) => setFiltro({ origen, destino })} />

        {/* Cards filtradas */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {rutasFiltradas.map(ruta => (
            <TransDepCard 
              key={ruta.id}
              startCity={ruta.start_city}
              endCity={ruta.end_city}
              startPoint={ruta.start_point}
              endPoint={ruta.end_point}
              travelTime={ruta.travel_time}
              fare={ruta.fare}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TransUrb({ onSwitch }) {
  const [rutasLocales, setRutasLocales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/Transplocal")
      .then(res => res.json())
      .then(data => setRutasLocales(data))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className='w-full flex justify-center py-12 bg-transparent'>
      <div className='w-10/12 flex flex-col gap-8 bg-black/50 p-8 rounded-xl'>
        <div className="flex justify-center">
          <div className='flex flex-row rounded-full shadow-xl overflow-hidden'>
            <button onClick={onSwitch} className="w-full border-2 border-r-0 text-[#5aa794] py-3 px-6 font-semibold hover:bg-[#1a1a1a] transition-colors">
              Transporte Interdepartamental
            </button>
            <button className="w-full bg-[#346530] text-white py-3 px-6 font-semibold hover:bg-[#21441E] transition-colors">
              Transporte Urbano
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='text-4xl lg:text-5xl font-bold bg-gradient-to-tr from-[#4294C7] to-[#1d3b1a] bg-clip-text text-transparent text-center'>
            Buses por departamento
          </h1>
          <p className='text-xl font-light mt-2 text-center text-white'>
            Conexiones directas entre las principales ciudades de Nicaragua
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {rutasLocales.map(ruta => (
            <UrbanTransCard 
              key={ruta.id}
              startPoint={ruta.start_point}
              endPoint={ruta.end_point}
              City={ruta.city}
              travelTime={ruta.travel_time}
              fare={ruta.fare}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Transporte() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="w-full">
      {isActive ? <TransDep onSwitch={() => setIsActive(false)} /> : <TransUrb onSwitch={() => setIsActive(true)} />}
    </div>
  );
}
