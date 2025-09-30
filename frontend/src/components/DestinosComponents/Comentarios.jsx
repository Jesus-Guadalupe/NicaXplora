import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const Comentarios = () => {
  const [isLike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "#1A1A1A" }}>
      <h3 className="text-2xl font-bold mb-4" style={{ color: "#5aa794" }}>Comentarios</h3>

      {/* Comentario ejemplo */}
      <div className="mb-4 p-4 rounded-lg shadow hover:shadow-lg transition-all" style={{ backgroundColor: "#242424" }}>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold" style={{ color: "#5aa794" }}>Nombre de Usuario</h4>
            <p className="text-white text-sm mt-1">Contenido del comentario aquí...</p>
          </div>

          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>
              <HiDotsHorizontal size={24} style={{ color: "#5aa794" }} className="hover:text-white transition-colors" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-1 bg-[#242424] border border-gray-700 rounded shadow z-10">
                <button className="px-3 py-1 text-red-500 hover:bg-red-700 rounded transition">Eliminar</button>
              </div>
            )}
          </div>
        </div>

        {/* Fecha y like */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-white/80">Publicado hace 2 días</span>
          <button onClick={() => setIsLike(!isLike)}>
            {isLike ? <AiFillLike size={20} style={{ color: "#5aa794" }} /> 
                     : <AiOutlineLike size={20} style={{ color: "#5aa794" }} className="hover:text-white transition" />}
          </button>
        </div>
      </div>

      {/* Input para nuevo comentario */}
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Escribe un comentario..."
          className="flex-1 p-3 rounded-lg border border-gray-700 bg-[#1A1A1A] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5aa794]"
        />
        <button className="bg-[#21441e] text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all font-medium">Comentar</button>
      </div>
    </div>
  );
};

export default Comentarios;
