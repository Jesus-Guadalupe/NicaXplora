import React from 'react';
import Navbar from '../components/Navbar';
import { GrMapLocation } from "react-icons/gr";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import Transporte from '../components/RutasComponents/Transporte';
import Footer from '../components/Footer';

const Rutas = () => {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <div
        className="relative mt-10 h-[43rem] flex justify-center items-center text-center"
        style={{
          backgroundImage:"url('fondo-rutas.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Contenido */}
        <div className="relative flex flex-col justify-center items-center text-white gap-6 px-6 z-10">
          <h1 className="text-6xl font-semibold drop-shadow-lg animate-fade-in">
            Transporte Nicaragua
          </h1>
          <p className="font-light text-xl max-w-2xl animate-fade-in delay-200">
            Buses interdepartamentales y transporte urbano
          </p>

          <div className="flex justify-center flex-wrap gap-8 mt-6 lg:mt-12 md:mt-12">
            {[
              {
                icon: <GrMapLocation className="md:text-5xl lg:text-5xl text-3xl mb-3 text-[#5aa794]" />,
                count: "25+",
                label: "Rutas interdepartamentales",
              },
              {
                icon: <RiMapPin2Fill className="md:text-5xl lg:text-5xl text-3xl mb-3 text-[#5aa794]" />,
                count: "4",
                label: "Sistemas Urbanos",
              },
              {
                icon: <IoStar className="md:text-5xl lg:text-5xl text-3xl mb-3 text-[#5aa794]" />,
                count: "5AM-9PM",
                label: "Horarios",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white/20 backdrop-blur-xl p-4 lg:p-8 md:p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl hover:translate-y-[-4px]"
              >
                {item.icon}
                <p className="text-3xl font-bold">{item.count}</p>
                <p className="font-medium text-center text-gray-100 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCION TRANSPORTE */}
      <div className="w-full min-w-[450px] min-h-screen px-6 py-12 bg-transparent">
        <Transporte />
      </div>
      <Footer />
    </>
  );
};

export default Rutas;
