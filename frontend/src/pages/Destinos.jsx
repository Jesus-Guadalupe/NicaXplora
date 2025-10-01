import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { IoIosStar } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import SliderLugares from '../components/DestinosComponents/SliderLugares';

const Destinos = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/destinos") // endpoint backend
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error("Error cargando destinos:", err));
  }, []);

  return (
    <>
      <Navbar />

      {/* Header con imagen de fondo */}
      <div
        className="mt-10 h-[45rem] flex justify-center items-center text-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/31071547/pexels-photo-31071547.jpeg?_gl=1*1ike5xx*_ga*ODM3NjkxNjY0LjE3NDcwNjg3OTM.*_ga_8JE65Q40S6*czE3NTkyNzUyMjgkbzE4JGcxJHQxNzU5Mjc1Mzk0JGozMiRsMCRoMA..')"
        }}
      >
        {/* capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Texto encima */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white px-6">
          <h1 className="text-6xl font-bold tracking-wide">
            Descubre Nicaragua por Departamentos
          </h1>
          <p className="font-light text-xl mt-4 max-w-xl">
            Explora los mejores destinos organizados por regiones y encuentra actividades, horarios y precios.
          </p>
        </div>
      </div>

      {/* Listado dinámico */}
      <div className="min-h-screen h-auto p-[6rem] flex flex-col gap-12 items-center">
        {destinos.map(dest => (
          <div
            key={dest.id}
            className="w-11/12 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 flex flex-col md:flex-row overflow-hidden"
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
                <p className="mt-2 line-clamp-3 text-white/80">{dest.description}</p>

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
                  <IoIosStar color="#5aa794" size={20} />
                  <span className="font-medium text-white">4.8</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <PiMapPinFill color="#5aa794" size={20} />
                  <span>{dest.city}</span>
                </div>
              </div>
            </div>

            {/* Slider de lugares relacionados */}
            <div className="w-full">
              <SliderLugares destinos={[dest]} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Destinos;
