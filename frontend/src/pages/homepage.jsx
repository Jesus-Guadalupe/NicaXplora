import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { MapPinIcon, Search, Star } from 'lucide-react'
import CardHome from '../components/CardHome'
import axios from 'axios';

const Homepage = () => {

  //Recibe datos a traves del endpoint
  const [destinos, setdestinos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3100/destacados")
    .then(res => setdestinos(res.data))
    .catch(err => console.error("Error al cargar el destino: ", err))
  }, [])

  
  return <>
  <Navbar/>
  {/*=======PRIMER SECTION DEL HOMEPAGE========*/}
    <div className=' mt-10 bg-gradient-to-t from-[#4294C7] to-[#21441E] h-[40rem] flex justify-center'>
        <div className=' flex flex-col justify-center items-center text-white'>

            <h1 className='text-6xl font-sans font-medium text-center'>
              Explora las maravillas de Nicaragua
            </h1>

            <p className='font-thin text-xl mt-4 text-center'>
              Descubre destinos únicos, planifica rutas y vive experiencias inolvidables
            </p>

            <div className='bg-white py-4 text-[#21441e] mt-4 flex flex-row items-center gap-4 px-8 w-11/12 justify-between rounded-md'>
                <div>
                  <Search className='scale-125'/>
                </div>
                <input type="text" placeholder='¿A donde quieres ir? Ej: Granada, Ometepe, Masaya...' className='text-[#21442e] w-full px-2 py-2 placeholder:font-thin focus:outline-none'/>
                <button className='bg-[#21441e] rounded-md py-2 w-60 text-white hover:bg-[#122b30] hover:shadow-lg active:translate-y-[2px] transition-all'>
                  Buscar
                </button>
            </div>

        </div>
    </div>

    {/*=======SEGUNDA SECTION DEL HOMEPAGE========*/}
    <div className='min-h-screen h-screen flex justify-center p-[8rem]'>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold lg:text-5xl text-[#21441e] text-4xl text-center'>Destinos destacados</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-8 pb-[8rem] justify-items-center'>
            {/*==========AQUÍ VAN LAS CARDS CON CIUDADES RECOMENDADOS========*/}

            {/* Valida los datos para que se devuelva la informacion correspondiente de cada destino */}
            {destinos.map(destino => (
              <CardHome 
              key={destino.id}
              name={destino.name}
              city={destino.city}
              description={destino.description}
              image={destino.image_url}
              activities={destino.activities}
              category={destino.category}
              />
            ))}

                  {/* EJEMPLO DE CARD */}
                  <CardHome/>
            </div>
        </div>
    </div>

  </>
}

export default Homepage