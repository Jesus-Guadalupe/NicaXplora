import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NotFavorites from '../components/NotFavorites';
import DashFavorites from '../components/DashFavorites';
import FilterButtons from '../components/FilterButtons';
import CardHome from '../components/CardHome';
import Footer from '../components/Footer';
import { toast } from 'react-hot-toast';
import { FaHeartBroken } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { LuHeartCrack } from "react-icons/lu";

const Favoritos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Favoritos");
  const [Cards, setCards] = useState([]);
  const [selectedfav, setFav] = useState(null);

  // Obtener el usuario logueado desde el localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id; // Id del usuario logueado

  // Cargar favoritos
  useEffect(() => {
    if (!userId) return; // Si no hay usuario logueado, no se hace fetch

    fetch(`http://localhost:3100/favoritos/${userId}`)
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error("Error al cargar favoritos:", err));
  }, [userId]);

  // Función para eliminar un favorito
  const handleEliminarFavorito = (favId) => {
    fetch(`http://localhost:3100/favoritos/${favId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) toast.success(data.message);
        // Actualiza la lista de favoritos eliminando el eliminado
        setCards(prev => prev.filter(f => f.id !== favId));
        setIsOpen(false); // Cierra el modal 
      })
      .catch(err => console.error("Error eliminando favorito:", err));
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <div
        className="relative mt-10 h-[42rem] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('fondo-favoritos.jpeg')" }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-6xl font-sans font-medium drop-shadow-lg">Mis favoritos</h1>
          <p className="font-thin text-xl mt-4 max-w-2xl">Destinos que has guardado para visitar</p>
        </div>
      </div>

      <div className="min-h-screen h-auto p-[8rem] w-full bg-black/30">
        <DashFavorites count={Cards.length}/>
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        {Cards.length === 0 && <NotFavorites />}

        {/* Listado de favoritos */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[3rem] mt-8 pb-[8rem] justify-items-center">
            {Cards.map((fav) => (
              <CardHome
                key={fav.id}
                name={fav.destino}
                city={fav.city}
                description={fav.description}
                image={fav.image_url}
                category={fav.category}
                activities={fav.activities}
                entryPrice={fav.entry_price}
                openingHours={fav.opening_hours}
              >
                {/* Botón de eliminar dentro de la card */}
                <button
                  onClick={() => {setIsOpen(true); setFav(fav.id);}}
                  className="bg-[#d45959] text-white px-3 py-2 rounded-md hover:bg-red-800 transition-all text-sm font-medium mt-2 flex items-center gap-2 justify-center"
                >
                  <FaHeartBroken/> Eliminar de favoritos
                </button>
              </CardHome>
            ))}
            
            {/* ==========Componente de confirmación de eliminación============= */}
            {isOpen && (
              <div className=' fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4'>
                    <div className='bg-[#111111] h-[65vh] md:h-[65vh] lg:h-[60vh] w-[50vh] rounded-md p-8 flex flex-col items-center justify-center relative'>
                            {/*Boton Cerrar pesataña*/}
                            <button onClick={() => setIsOpen(!isOpen)}
                            className='absolute top-5 right-5 mb-4 active:translate-y-[2px] transition-all'>
                                <IoMdCloseCircle  size={30}/>
                            </button>

                        {/*Texto pestaña*/}
                        <h1 className='text-white text-2xl font-semibold text-center pt-4'>¿Estás seguro de eliminar este destino de tus favoritos?</h1>
                        <div className='bg-[#162D13] w-[8rem] h-[8rem] p-8 rounded-full flex justify-center items-center mt-8'>
                            <LuHeartCrack size={100} color='#4BBA3F'/>
                        </div>
                            <p className='text-[#4BBA3F] mt-2 mb-10 font-semibold'>Eliminarás un destino de tus favoritos</p>


                            {/*Boton eliminar */}
                            <button onClick={() => handleEliminarFavorito(selectedfav)}
                            className='bg-[#d45959] text-white w-11/12 p-5 md:py-5 lg:py-3 rounded-md hover:bg-red-800 active:translate-y-[2px] transition-all text-sm font-medium mt-2 flex items-center gap-2 justify-center'>
                                <FaHeartBroken/> Eliminar
                            </button>
                            
                            {/*Boton Cerrar pesataña*/}
                            <button onClick={ () => setIsOpen(!isOpen)}
                            className='bg-[#4BBA3F] text-white w-11/12 p-5 md:py-5 lg:py-3 rounded-md hover:bg-emerald-900 active:translate-y-[2px] transition-all text-sm font-medium mt-2 flex items-center gap-2 justify-center'>
                                Cancelar
                            </button>
                        </div>
                </div>
        )}
          </div>
          </div>
          </div>
          <Footer />
    </>
  );
};

export default Favoritos;