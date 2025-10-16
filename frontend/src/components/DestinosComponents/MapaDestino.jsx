import React, { useEffect, useRef, useState } from "react";
import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const MapaDestino = ({ destino, onClose }) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const userMarker = useRef(null);
  const destinoMarker = useRef(null);

  const [rutas, setRutas] = useState([]);
  const [loadingRutas, setLoadingRutas] = useState(true);

  // 🔹 Obtener rutas locales relacionadas con el destino
  useEffect(() => {
    if (!destino?.id) return;

    fetch("http://localhost:3100/Transplocal")
      .then((res) => res.json())
      .then((data) => {
        const filtradas = data.filter(
          (ruta) => ruta.destination_id === destino.id
        );
        setRutas(filtradas);
        setLoadingRutas(false);
      })
      .catch((err) => {
        console.error("Error cargando rutas locales:", err);
        setLoadingRutas(false);
      });
  }, [destino]);

  // 🔹 Inicializar mapa
  useEffect(() => {
    if (!destino?.lat || !destino?.lng) {
      console.error("Faltan coordenadas del destino");
      return;
    }

    const iniciarMapa = () => {
      const destinoCoords = {
        lat: parseFloat(destino.lat),
        lng: parseFloat(destino.lng),
      };

      map.current = new window.google.maps.Map(mapRef.current, {
        zoom: 14,
        center: destinoCoords,
      });

      destinoMarker.current = new window.google.maps.Marker({
        position: destinoCoords,
        map: map.current,
        title: destino.name,
      });

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const userCoords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            if (!userMarker.current) {
              userMarker.current = new window.google.maps.Marker({
                position: userCoords,
                map: map.current,
                title: "Tu ubicación",
                icon: {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: "#00a2ff",
                  fillOpacity: 0.9,
                  strokeWeight: 2,
                  strokeColor: "#fff",
                },
              });
            } else {
              userMarker.current.setPosition(userCoords);
            }
          },
          () => alert("No se pudo obtener tu ubicación."),
          { enableHighAccuracy: true }
        );
      }
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=initMap`;
    script.async = true;
    window.initMap = iniciarMapa;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, [destino]);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 overflow-y-auto px-3 py-6 backdrop-blur-sm">
      <div className="bg-[#121212] rounded-2xl w-full max-w-3xl shadow-2xl relative animate-fadeIn border border-[#2a2a2a] overflow-hidden">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/90 hover:text-red-400 transition-all"
          title="Cerrar"
        >
          <IoCloseCircle size={32} />
        </button>

        {/* Título */}
        <div className="p-4 border-b border-[#2c2c2c] text-center bg-[#1c1c1c]">
          <h2 className="text-2xl font-bold text-white">
            Cómo llegar a{" "}
            <span className="text-[#5aa794]">{destino.name}</span>
          </h2>
        </div>

        {/* Mapa */}
        <div
          ref={mapRef}
          className="w-full h-[300px] sm:h-[380px] rounded-none sm:rounded-xl"
          style={{
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)",
          }}
        />

        {/* Rutas relacionadas */}
        <div className="p-5 bg-[#141414]">
          <h3 className="text-xl font-semibold text-white text-center mb-4">
            🚌 Ruta urbana hacia este destino
          </h3>

          {loadingRutas ? (
            <p className="text-center text-gray-400">Cargando rutas...</p>
          ) : rutas.length > 0 ? (
            rutas.map((ruta) => (
              <div
                key={ruta.id}
                className="bg-[#1a1a1a] border border-[#2f4f4f]/50 rounded-2xl overflow-hidden mb-4 hover:border-[#5aa794]/70 transition-all shadow-md hover:shadow-[#5aa794]/20"
              >
                {/* Encabezado */}
                <div className="bg-gradient-to-tr from-[#346530] to-[#4294C7] p-4 flex justify-between items-center text-white rounded-t-2xl">
                  <div>
                    <h1 className="text-xl flex items-center gap-2 font-bold">
                      <MdLocationCity className="text-yellow-300 text-2xl" />
                      {ruta.city}
                    </h1>
                    <div className="flex items-center gap-2 mt-1 text-base">
                      <RiMoneyDollarCircleFill className="text-yellow-300" />
                      <p className="font-semibold">C${ruta.fare}</p>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full p-3">
                    <FaBus className="text-3xl" />
                  </div>
                </div>

                {/* Detalles */}
                <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-3 bg-[#101010]">
                  <div className="text-white text-sm md:text-base">
                    <p>
                      <span className="text-[#5aa794] font-semibold">
                        Inicio:
                      </span>{" "}
                      {ruta.start_point}
                    </p>
                    <p>
                      <span className="text-[#5aa794] font-semibold">
                        Destino:
                      </span>{" "}
                      {ruta.end_point}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#4294C7] to-[#346530] text-white rounded-xl py-1.5 px-4 font-semibold text-sm text-center shadow-md">
                    Cada {ruta.travel_time}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-sm">
              No se encontró una ruta urbana asociada a este destino.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapaDestino;
