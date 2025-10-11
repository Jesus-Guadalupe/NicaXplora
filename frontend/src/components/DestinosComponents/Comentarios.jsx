import React, { useState, useEffect } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const Comentarios = ({ destinationId }) => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [isLike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(null); // Para abrir menú de 1 comentario

  // 🔹 Leer usuario logueado
  const usuario = JSON.parse(localStorage.getItem("user")); // <-- key correcta
  const userId = usuario?.id;

  // 🔹 Cargar comentarios del destino al montar
  useEffect(() => {
    fetch(`http://localhost:3100/reviews/destination/${destinationId}`)
      .then(res => res.json())
      .then(data => setComentarios(data))
      .catch(err => console.error("Error al obtener comentarios:", err));
  }, [destinationId]);

  // 🔹 Agregar un nuevo comentario
  const handleComentar = async () => {
    if (!nuevoComentario.trim()) return;

    const data = {
      user_id: userId,
      destination_id: destinationId,
      rating: null,
      comment: nuevoComentario,
    };

    try {
      const res = await fetch("http://localhost:3100/reviews/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar comentario");

      const nuevo = await res.json();
      setComentarios(prev => [{ ...nuevo, user_name: "Tú" }, ...prev]);
      setNuevoComentario("");
    } catch (err) {
      console.error("Error al enviar comentario:", err);
    }
  };

  // 🔹 Eliminar un comentario
  const handleEliminar = async (id) => {
    try {
      const res = await fetch(`http://localhost:3100/reviews/delete/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar comentario");

      setComentarios(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error("Error al eliminar comentario:", err);
    }
  };

  return (
    <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "#1A1A1A" }}>
  <h3 className="text-2xl font-bold mb-4" style={{ color: "#5aa794" }}>Comentarios</h3>

  {/* Contenedor scrollable */}
  <div className="space-y-4 max-h-[12.0rem] overflow-y-auto pr-2 custom-scroll">
    {comentarios.length > 0 ? (
      comentarios.map((c) => (
        <div key={c.id} className="p-4 rounded-lg shadow hover:shadow-lg transition-all" style={{ backgroundColor: "#242424" }}>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold" style={{ color: "#5aa794" }}>{c.user_name}</h4>
              <p className="text-white text-sm mt-1">{c.comment}</p>
            </div>

            {c.user_id === userId && (
              <div className="relative">
                <button onClick={() => setIsOpen(isOpen === c.id ? null : c.id)}>
                  <HiDotsHorizontal size={24} style={{ color: "#5aa794" }} className="hover:text-white transition-colors" />
                </button>
                {isOpen === c.id && (
                  <div className="absolute right-0 mt-1 bg-[#242424] border border-gray-700 rounded shadow z-10">
                    <button
                      onClick={() => handleEliminar(c.id)}
                      className="px-3 py-1 text-red-500 hover:bg-red-700 rounded transition"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-white/80">{new Date(c.created_at).toLocaleString()}</span>
            <button onClick={() => setIsLike(!isLike)}>
              {isLike ? <AiFillLike size={20} style={{ color: "#5aa794" }} /> 
                       : <AiOutlineLike size={20} style={{ color: "#5aa794" }} className="hover:text-white transition" />}
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-white/60">No hay comentarios aún. Sé el primero en opinar.</p>
    )}
  </div>

    {/* Input para nuevo comentario */}
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={nuevoComentario}
        onChange={(e) => setNuevoComentario(e.target.value)}
        placeholder="Escribe un comentario..."
        className="flex-1 p-3 rounded-lg border border-gray-700 bg-[#1A1A1A] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5aa794]"
      />
      <button
        onClick={handleComentar}
        className="bg-[#21441e] text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all font-medium"
      >
        Comentar
      </button>
    </div>
  </div>

  );
};

export default Comentarios;
