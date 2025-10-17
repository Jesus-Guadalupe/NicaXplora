import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoSend } from 'react-icons/io5';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Servicios = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sjyquoh', 'template_0bjoudl', form.current, {
        publicKey: 'iyU4mkkQ8nQrhSUd3',
      })
      .then(
        () => {
          alert('✅ ¡Mensaje enviado correctamente!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Hubo un error al enviar el mensaje. Intenta nuevamente.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />

      {/* Imagen principal */}
      <div
        className="relative mt-10 h-[42rem] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('img-Servicios.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-6xl font-sans font-medium drop-shadow-lg">Servicios de reserva</h1>
          <p className="font-thin text-xl mt-4 max-w-2xl">Reserva un viaje con nosotros</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="min-h-screen h-auto flex justify-center items-center bg-black/30 py-12">
        <div className="bg-[#1a1a1a] w-10/12 rounded-xl flex flex-col lg:flex-row overflow-hidden">
          {/* Formulario de contacto */}
          <form ref={form} onSubmit={sendEmail} className="m-9 flex flex-col justify-center w-full lg:w-1/2 text-white">
            <h1 className="text-4xl font-bold mb-6 text-white">Contáctanos para reservar tu viaje</h1>

            <label className="mb-1">Nombre</label>
            <input
              name="user_name"
              type="text"
              placeholder="Nombre completo"
              className="w-11/12 mt-2 h-10 rounded-md bg-[#262323ff] py-4 border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]"
              required
            />

            <label className="mb-1">Número telefónico</label>
            <input
              name="user_contact"
              type="number"
              placeholder="Numero telefonico"
              pattern="[0-9]{4}-[0-9]{4}"
              className="w-11/12 mt-2 h-10 rounded-md bg-[#262323ff] border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]"
              required
            />

            <label className="mb-1">Correo electrónico</label>
            <input
              name="user_email"
              type="email"
              placeholder="Correo electrónico"
              className="w-11/12 mt-2 h-10 rounded-md bg-[#262323ff] py-4 border border-gray-600 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#346530]"
              required
            />

            <label className="mb-1">Mensaje</label>
            <textarea
              name="message"
              placeholder="Describe brevemente tu viaje planeado..."
              className="w-11/12 mt-2 h-28 rounded-md py-4 bg-[#262323ff] border border-gray-600 px-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#346530]"
              required
            />

            {/* Botón de enviar */}
            <button
              type="submit"
              className="bg-[#346530] text-white font-medium mt-4 w-11/12 rounded-md py-3 flex items-center justify-center gap-2 active:translate-y-[2px] hover:bg-[#408f4a] transition-all"
            >
              Enviar <IoSend size={20} />
            </button>
          </form>

          {/* Imagen lateral */}
          <img
            src="/Bus-Nica.jpg"
            className="object-cover w-full lg:w-1/2 h-[80vh] hidden md:block rounded-r-xl"
            alt="Bus de viaje"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Servicios;
