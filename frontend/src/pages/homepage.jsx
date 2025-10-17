import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Search } from 'lucide-react'
import CardHome from '../components/CardHome'
import axios from 'axios';
import Chatbot from '../components/Chatbot/Chatbot';
import { useNavigate } from 'react-router-dom'; // Para redirigir a Destinos.jsx
import Footer from '../components/Footer';
import CardDisplay from '../components/CardDisplay';

const Homepage = () => {

  // Estados
  const [destinos, setdestinos] = useState([]) // Solo los destacados
  const [SearchTerm, setSearchTerm] = useState("") // Texto ingresado en la barra
  const navigate = useNavigate() // Hook para redirigir a otra página

  // Cargar los destinos destacados desde el backend
  useEffect(() => {
    axios.get("http://localhost:3100/destacados")
      .then(res => setdestinos(res.data))
      .catch(err => console.error("Error al cargar los destinos: ", err))
  }, [])

  // Función que se ejecuta al hacer click en Buscar
  const handleSearch = () => {
    if (SearchTerm.trim()) {
      // Redirige a la pantalla Destinos.jsx con el término de búsqueda como query param
      navigate(`/destinos?search=${encodeURIComponent(SearchTerm)}`)
    }
  }

  return <>
    <Navbar/>

    {/* ======= PRIMER SECTION DEL HOMEPAGE CON IMAGEN DE FONDO ======= */}
    <div
      className="mt-10 h-[42rem] flex justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('fondo-home.jpeg ')",
      }}
    >
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido de texto y barra de búsqueda */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white px-6">
        <h1 className='text-6xl font-sans font-medium text-center'>
          Explora las maravillas de Nicaragua
        </h1>

        <p className='font-thin text-xl mt-4 text-center'>
          Descubre destinos únicos, planifica rutas y vive experiencias inolvidables
        </p>

        {/* Barra de búsqueda */}
        <div className='bg-black py-4 text-white mt-4 flex flex-row items-center gap-4 px-8 w-11/12 justify-between rounded-md hover:shadow-md hover:drop-shadow-sm hover:shadow-emerald-500 transition-all'>
          <div>
            <Search className='scale-125'/>
          </div>

          {/* Input de búsqueda */}
          <input
            type="text"
            placeholder='¿A donde quieres ir? Ej: Granada, Ometepe, Masaya...'
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            className='text-[#white] w-full px-2 py-2 placeholder:font-thin focus:outline-none' 
            style={{ backgroundColor: "#262323ff" }}
          />

          {/* Botón de búsqueda */}
          <button
            onClick={handleSearch}
            className='bg-[#21441e] rounded-md py-2 w-60 text-white hover:bg-[#122b30] hover:shadow-lg active:translate-y-[2px] transition-all'
          >
            Buscar
          </button>
        </div>
      </div>
    </div>


    {/* ======= SEGUNDA SECTION DEL HOMEPAGE: DESTINOS DESTACADOS ======= */}
    <div className='min-h-screen h-auto flex justify-center p-[8rem] md:p-[8rem] lg:p-[8rem] bg-black/30'>
      
      
            {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold lg:text-5xl text-[white] text-4xl text-center'>Destinos destacados</h1>

        <div className='grid grid-cols-1 gap-[1rem] md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[3rem] lg:gap-[rem] mt-8 pb-[8rem] justify-items-center lg:max-w-full md:max-w-full max-w-[340px]'>
          {destinos.length === 0 ? (
            <p className="text-gray-500 text-lg">No se encontraron destinos destacados.</p>
          ) : (
            destinos.map(destino => (
              <CardHome
                key={destino.id}
                name={destino.name}
                city={destino.city}
                description={destino.description}
                image={destino.image_url}
                activities={destino.activities}
                category={destino.category}
                entryPrice={destino.entry_price}
                openingHours={destino.opening_hours}
              />
            ))
          )}
        </div>
      </div>
        <CardDisplay/>
    </div>

    <Chatbot/>
    <Footer/>
  </>
}

export default Homepage
