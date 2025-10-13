import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import NotFavorites from '../components/NotFavorites';
import DashFavorites from '../components/DashFavorites';
import FilterButtons from '../components/FilterButtons';
import CardHome from '../components/CardHome';

const Favoritos = () => {
  const [activeFilter, setActiveFilter] = useState("Favoritos");
  const [Cards, setCards] = useState([]);

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
        if (data.message) alert(data.message);
        // Actualiza la lista de favoritos eliminando el eliminado
        setCards(prev => prev.filter(f => f.id !== favId));
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

      <div className="min-h-screen h-auto p-[8rem] w-full bg-transparent">
        <DashFavorites />
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        {Cards.length === 0 && <NotFavorites />}

        {/* Listado de favoritos */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-8 pb-[8rem]">
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
                  onClick={() => handleEliminarFavorito(fav.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-800 transition-all text-sm font-medium mt-2"
                >
                  ❌ Eliminar de favoritos
                </button>
              </CardHome>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favoritos;