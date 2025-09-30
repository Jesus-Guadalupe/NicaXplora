import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const Comentarios = () => {
  const [isLike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 bg-gray-50 rounded-xl shadow-inner p-4">
      <h3 className="text-[#21441E] text-2xl font-bold mb-4">Comentarios</h3>

      {/* Comentario ejemplo */}
      <div className="mb-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-all">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-[#346530]">Nombre de Usuario</h4>
            <p className="text-gray-700 text-sm mt-1">Contenido del comentario aquí...</p>
          </div>

          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>
              <HiDotsHorizontal size={24} className="text-gray-500 hover:text-red-500 transition-colors" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10">
                <button className="px-3 py-1 text-red-600 hover:bg-red-100 rounded transition">Eliminar</button>
              </div>
            )}
          </div>
        </div>

        {/* Fecha y like */}
        <div className="flex justify-between items-center mt-2 text-gray-500 text-xs">
          <span>Publicado hace 2 días</span>
          <button onClick={() => setIsLike(!isLike)}>
            {isLike ? <AiFillLike size={20} className="text-[#346530]" /> : <AiOutlineLike size={20} className="text-gray-400 hover:text-[#346530] transition" />}
          </button>
        </div>
      </div>

      {/* Input para nuevo comentario */}
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Escribe un comentario..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#346530]"
        />
        <button className="bg-[#346530] text-white px-4 py-3 rounded-lg hover:bg-[#1d3a1b] transition-all font-medium">Comentar</button>
      </div>
    </div>
  );
};

export default Comentarios;
