import React, { useState } from 'react';

const BusquedaTransDep = ({ onFilter }) => {
  // Estados para origen y destino
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');

  // Función que se llama al presionar "Buscar"
  const handleBuscar = () => {
    // Llama al padre con los filtros seleccionados
    onFilter(origen, destino);
  }

  return (
    <div className='w-full flex flex-col items-center'>

      {/* TITULO DE SECTION */}
      <div className='flex w-10/12 flex-col justify-center'>
        <h1 className='text-center lg:text-start font-bold text-4xl lg:text-5xl bg-gradient-to-t text-white bg-clip-text text-transparent'>
          Buses por departamento
        </h1>
        <p className='text-xl font-light mt-2 text-center lg:text-start'>
          Conexiones directas entre las principales ciudades de Nicaragua
        </p>
      </div>

      {/* BARRA DE FILTROS */}
      <div className='w-full flex flex-col items-center'>
        <div className='bg-[#1A1A1A] shadow-lg w-10/12 flex lg:flex-row md:flex-col flex-col gap-4 items-center justify-between lg:p-6 p-4 rounded-xl mt-6'>

          {/* SELECT ORIGEN */}
          <div className='lg:w-[40%] w-[90%]'>
            <p className='font-semibold ml-3'>Desde</p>
            <select
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              className='lg:w-10/12 w-full border p-4 rounded-lg text-slate-200 focus:outline-[#69c7ba]'
              style={{ backgroundColor: "#424242" }}
            >
              <option value="">Selecciona origen</option>
              {/* Solo los orígenes válidos */}
              <option value="Estelí">Estelí</option>
              <option value="Managua">Managua</option>
            </select>
          </div>

          {/* SELECT DESTINO */}
          <div className='lg:w-[40%] w-[90%]'>
            <p className='font-semibold ml-3'>Hasta</p>
            <select
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              className='lg:w-10/12 w-full border p-4 rounded-lg text-slate-200 focus:outline-[#69c7ba]'
              style={{ backgroundColor: "#424242" }}
            >
              <option value="">Selecciona destino</option>
              {/* Solo los destinos válidos */}
              <option value="León">León</option>
              <option value="Estelí">Estelí</option>
            </select>
          </div>

          {/* BOTON BUSCAR */}
          <div className='lg:w-[20%] w-[90%] flex justify-center'>
            <button
              onClick={handleBuscar}
              className='bg-[#346530] text-white p-4 rounded-lg w-full mt-6 hover:bg-[#1d443e]'
            >
              Buscar
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BusquedaTransDep;
