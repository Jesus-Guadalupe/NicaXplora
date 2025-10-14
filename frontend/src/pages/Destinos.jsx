import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { useLocation } from "react-router";
import Comentarios from '../components/DestinosComponents/Comentarios';
import { toast } from 'react-hot-toast';

const Destinos = () => {
  const [destinos, setDestinos] = useState([]);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null); // Ventana emergente de comentarios
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";
  const [verMas, setVerMas] = useState(false);

  //  Cargar todos los destinos
  useEffect(() => {
    fetch("http://localhost:3100/destinos")
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error("Error cargando destinos:", err));
  }, []);

  // Filtrar según búsqueda
  const destinosFiltrados = searchTerm
    ? destinos.filter(destino =>
        (destino.name && destino.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (destino.city && destino.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (destino.category && destino.category.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : destinos;

  return (
    <>
      <Navbar />

      {/* Header */}
      <div
        className="mt-10 h-[45rem] flex justify-center items-center text-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('fondo-destinos.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white px-6">
          <h1 className="text-6xl font-bold tracking-wide">
            Descubre Nicaragua por Departamentos
          </h1>
          <p className="font-light text-xl mt-4 max-w-xl">
            Explora los mejores destinos organizados por regiones y encuentra actividades, horarios y precios.
          </p>
          {searchTerm && (
            <p className="text-white mt-2 font-medium">
              Mostrando resultados para: "{searchTerm}"
            </p>
          )}
        </div>
      </div>

      {/* Listado de destinos */}
      <div className="min-h-screen h-auto p-[6rem] flex flex-col gap-12 items-center">
        {destinosFiltrados.length === 0 ? (
          <p className="text-gray-500 text-lg">No se encontraron destinos.</p>
        ) : (
          destinosFiltrados.map(dest => (
            <div
              // Tamaño de las tarjetas de destinos
              key={dest.id}
              className="w-10/12 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 flex flex-col md:flex-row overflow-hidden"
              style={{ backgroundColor: "#141414" }}
            >
              {/* Imagen */}
              <div className="md:w-1/3 relative">
                <img src={dest.image_url} alt={dest.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-[#21441e] text-white px-3 py-1 rounded-full font-medium text-sm">
                  {dest.city}
                </span>
                <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-medium text-sm">
                  {dest.category}
                </span>
              </div>

              {/* Contenido */}
              <div className="md:w-2/3 p-6 flex flex-col justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white">{dest.name}</h2>
                  
                  {/*Controla la vista de la descripcion en las card de destinos */}
                  <p className="mt-2 text-white/80">
                  {verMas ? dest.description : `${dest.description.slice(0, 1000)}...`}
                  </p>
                    <button
                      onClick={() => setVerMas(!verMas)}
                      className="text-[#5aa794] font-medium mt-1 text-sm hover:underline"
                    >
                      {verMas ? "Ver menos" : "Ver más"}
                    </button>

                  {dest.activities && (
                    <p className="mt-3 text-sm" style={{ color: "#5aa794" }}>
                      <span className="font-medium text-white">Actividades:</span> {dest.activities}
                    </p>
                  )}
                </div>

                {/* Horarios y precio */}
                <div className="flex justify-between mt-4 text-sm" style={{ color: "#5aa794" }}>
                  <span className="text-white">Horario: {dest.opening_hours}</span>
                  <span className="text-white">Entrada: ${dest.entry_price}</span>
                </div>

                {/* Valoración y ubicación */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2"> 
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <PiMapPinFill color="#5aa794" size={20} />
                    <span>{dest.city}</span>
                  </div>
                </div>

                {/* Botón para abrir comentarios */}
              <div className="flex justify-end mt-4 gap-3">
                <button
                onClick={() => setDestinoSeleccionado(dest)}
                className="bg-[#21441e] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all text-sm font-medium"
                >   
                 💬 Ver comentarios
                </button>

                <button
                  onClick={() => {
                    // Obtener el usuario logueado
                    const user = JSON.parse(localStorage.getItem("user"));
                    if (!user) return alert("Debes iniciar sesión para agregar a favoritos");

                    fetch("http://localhost:3100/favoritos", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ 
                        user_id: user.id,       // <-- aquí usamos el id real del usuario logueado
                        destination_id: dest.id
                      }),
                    })
                    .then(res => res.json())
                    .then(data => { 
                      
                    })
                    .catch(err => console.error("Error agregando favorito:", err), toast.error("Error agregando a favoritos"));
                  }}
                  className="bg-[#21441e] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all text-sm font-medium"
                >
                  ⭐ Agregar a favoritos
                </button>


                </div>

              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal de Comentarios */}
      {destinoSeleccionado && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-[#1A1A1A] rounded-xl w-full max-w-2xl p-6 shadow-2xl relative animate-fadeIn">
            {/* Botón cerrar */}
            <button
              onClick={() => setDestinoSeleccionado(null)}
              className="absolute top-3 right-4 text-white text-2xl hover:text-red-400 transition"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              Comentarios de <span style={{ color: "#5aa794" }}>{destinoSeleccionado.name}</span>
            </h2>

            <Comentarios destinationId={destinoSeleccionado.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Destinos;
