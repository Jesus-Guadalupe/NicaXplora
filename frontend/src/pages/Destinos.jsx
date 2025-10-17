import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoArrowRedoCircle } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import Comentarios from '../components/DestinosComponents/Comentarios';
import MapaDestino from '../components/DestinosComponents/MapaDestino';
import { toast } from 'react-hot-toast';
import Footer from '../components/Footer';

const Destinos = () => {
  const [destinos, setDestinos] = useState([]);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  const [destinoMapa, setDestinoMapa] = useState(null);
  const [verMasIds, setVerMasIds] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  useEffect(() => {
    fetch("http://localhost:3100/destinos")
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error("Error cargando destinos:", err));
  }, []);

  const destinosFiltrados = searchTerm
    ? destinos.filter(destino =>
        (destino.name && destino.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (destino.city && destino.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (destino.category && destino.category.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : destinos;

  const toggleVerMas = (id) => {
    if (verMasIds.includes(id)) {
      setVerMasIds(verMasIds.filter(i => i !== id));
    } else {
      setVerMasIds([...verMasIds, id]);
    }
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <div
        className="mt-10 h-[45rem] flex justify-center items-center text-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('fondo-destinos.webp')" }}
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
      <div className='flex justify-items-center md:max-w-full lg:max-w-full overflow-x-auto scroll-smooth scrollbar-hide bg-black/30'>
        <div className="min-h-[700px] lg:min-h-screen lg:h-auto p-[4rem] flex md:flex-col lg:flex-col flex-row gap-2 md:gap-6 lg:gap-12 items-center">
          {destinosFiltrados.length === 0 ? (
            <p className="text-gray-500 text-lg">No se encontraron destinos.</p>
          ) : (
            destinosFiltrados.map(dest => {
              const verMas = verMasIds.includes(dest.id);
              return (
                <div
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
                      <p className="mt-2 text-white/80">
                        {verMas ? dest.description : `${dest.description.slice(0, 200)}...`}
                      </p>
                      <button
                        onClick={() => toggleVerMas(dest.id)}
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
                    <div className="flex justify-between lg:mt-4 md:mt-4 mt-1 text-sm" style={{ color: "#5aa794" }}>
                      <span className="text-white">Horario: {dest.opening_hours}</span>
                      <span className="text-white">Entrada: ${dest.entry_price}</span>
                    </div>

                    {/* Valoración y ubicación */}
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center gap-2 text-white/80">
                        <PiMapPinFill color="#5aa794" size={20} />
                        <span>{dest.city}</span>
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end mt-4 gap-3">
                      <button
                        onClick={() => setDestinoSeleccionado(dest)}
                        className="bg-[#21441e] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all text-sm font-medium flex items-center gap-2"
                      >
                        <BiSolidCommentDetail className='text-2xl' /> Ver comentarios
                      </button>

                      <button
                        onClick={() => {
                          const user = JSON.parse(localStorage.getItem("user"));
                          if (!user) return alert("Debes iniciar sesión para agregar a favoritos");

                          fetch("http://localhost:3100/favoritos", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ 
                              user_id: user.id,
                              destination_id: dest.id
                            }),
                          })
                          .then(async (res) => {
                            const data = await res.json();
                            if (!res.ok) throw new Error(data.message || "Error al agregar a favoritos");
                            toast.success(data.message || "¡Destino agregado a favoritos!");
                          })
                          .catch((err) => toast.error(err.message || "Error al agregar a favoritos"));
                        }}
                        className="bg-[#21441e] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all text-sm font-medium flex items-center gap-2"
                      >
                        <IoIosStar className='text-2xl' /> Agregar a favoritos
                      </button>

                      <button
                        onClick={() => setDestinoMapa(dest)}
                        className="flex items-center gap-2 bg-[#46a098] text-white px-4 py-2 rounded-lg hover:bg-[#3e8e7d] transition-all text-sm font-medium"
                      >
                        Cómo llegar <IoArrowRedoCircle />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Modal de Comentarios */}
      {destinoSeleccionado && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-[#1A1A1A] rounded-xl w-full max-w-2xl p-6 shadow-2xl relative animate-fadeIn">
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

      {/* Modal de Mapa */}
      {destinoMapa && (
        <MapaDestino
          destino={destinoMapa}
          onClose={() => setDestinoMapa(null)}
        />
      )}

      <Footer />
    </>
  );
};

export default Destinos;