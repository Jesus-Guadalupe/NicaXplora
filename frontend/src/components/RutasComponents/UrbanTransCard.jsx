import React from 'react';
import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";

// Datos de rutas urbanas
const urbanRoutes = [
  {
    city: "León",
    fare: 15,
    description: "Sistema urbano con acceso al centro histórico",
    icon: <MdLocationCity className='text-8xl opacity-40' />,
    routes: [
      { number: "101", from: "Catedral de León", stops: "Parque Central, Universidad Nacional", frequency: "Cada 15min" },
      { number: "102", from: "Playa las peñitas", stops: "Catedral de León, Hospital Escuela", frequency: "Cada 20min" }
    ]
  },
  {
    city: "Estelí",
    fare: 10,
    description: "Rutas urbanas rápidas hacia zonas turísticas",
    icon: <MdLocationCity className='text-8xl opacity-40' />,
    routes: [
      { number: "105", from: "Iglesia catolica Estelí", stops: "Terminal Estelí, parque infantil, parque central", frequency: "Cada 15min" },
      { number: "108", from: "Salto la estanzuela", stops: "Mercado Municipal, Hospital san juan de Dios, miradores la estanzuela", frequency: "Cada 1 hora" }
    ]
  },
  {
    city: "Chontales",
    fare: 20,
    description: "Rutas urbanas hacia playas y lagos cercanos",
    icon: <MdLocationCity className='text-8xl opacity-40' />,
    routes: [
      { number: "301", from: "Lago cocibolca", stops: "Llano la Cruz, los altos, las canoas", frequency: "Cada 30min" },
      { number: "302", from: "Restaurante Bucanero", stops: "La pita, la garita, Chontales", frequency: "Cada 40min" }
    ]
  }
];

const UrbanTransCard = () => {
  return (
    <div className='flex flex-col gap-10'>
      {urbanRoutes.map((routeCity, index) => (
        <div key={index} className='shadow-2xl rounded-3xl overflow-hidden transition-transform hover:scale-105 hover:shadow-3xl'>
          
          {/* Header */}
          <div className='bg-gradient-to-tl from-[#4294C7] to-[#346530] p-8 flex flex-row justify-between items-center text-white font-bold rounded-t-3xl'>
            <div>
              <h1 className='text-3xl'>{routeCity.city}</h1>
              <p className='font-light mt-2'>{routeCity.description}</p>
              <div className='flex items-center gap-2 mt-3'>
                <RiMoneyDollarCircleFill className='text-yellow-300' />
                <p className='text-lg'>C${routeCity.fare}</p>
              </div>
            </div>
            <div>
              {routeCity.icon}
            </div>
          </div>

          {/* Contenido de rutas */}
          <div className='flex flex-col gap-6 p-6 bg-white'>
            {routeCity.routes.map((r, i) => (
              <div key={i} className='bg-gray-50 shadow-md rounded-xl p-4 flex flex-col md:flex-row justify-between gap-4 items-center'>
                
                <div className='flex items-center gap-4'>
                  <div className='bg-[#346530] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl'>
                    {r.number}
                  </div>
                  <div>
                    <h2 className='font-semibold text-lg'>{r.from}</h2>
                    <p className='text-gray-600 text-sm'>Pasa por: {r.stops}</p>
                  </div>
                </div>

                <div className='bg-[#4294C7] text-white rounded-xl p-2 font-semibold text-center min-w-[140px]'>
                  {r.frequency}
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrbanTransCard;
