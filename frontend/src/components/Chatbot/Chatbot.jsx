import { useState, useEffect } from "react";
import axios from "axios";

export default function Chatbot() {
  // Estado para abrir/cerrar el chat
  const [isOpen, setIsOpen] = useState(false);

  // Estado de mensajes
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! 👋 Soy tu asistente de NicaXplora. ¿Qué deseas consultar?" },
  ]);

  // Estado para preguntas traídas desde la BD
  const [options, setOptions] = useState([]);

  // Cargar preguntas del chatbot desde el backend al iniciar
  useEffect(() => {
    axios.get("http://localhost:3100/chatbot") // Endpoint que debes crear
      .then(res => setOptions(res.data))
      .catch(err => console.error("Error cargando preguntas del chatbot:", err));
  }, []);

  // Función que se ejecuta al seleccionar una pregunta
  const sendMessage = (option) => {
    // Añadir mensaje del usuario
    setMessages((prev) => [...prev, { from: "user", text: option.question }]);

    // Añadir respuesta del bot después de un pequeño delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: option.answer }]);
    }, 600);
  };

  return (
    <>
      {/* Botón flotante para abrir/cerrar el chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[9999] bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-full shadow-lg transition"
      >
        {isOpen ? "Cerrar Chat" : "Charlar🤖"}
      </button>

      {/* Chat solo se renderiza si isOpen = true */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-5 w-80 shadow-xl rounded-2xl border border-gray-700 flex flex-col overflow-hidden z-[9999]"
          style={{ backgroundColor: "#141414" }} // Fondo principal del chatbot
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-3 text-center font-semibold">
            🤖 Chat NicaXplora
          </div>

          {/* Zona de mensajes */}
          <div
            className="flex-1 p-3 space-y-3 overflow-y-auto max-h-80"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="px-4 py-2 rounded-2xl text-sm shadow-sm border border-gray-700"
                  style={{
                    backgroundColor: msg.from === "user" ? "#21441e" : "#141414",
                    color: "#fff",
                    borderRadius:
                      msg.from === "user" ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 0",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Botones de preguntas */}
          <div
            className="border-t border-gray-700 p-2 flex flex-wrap gap-2 justify-center"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            {options.map((opt) => (
              <button
                key={opt.id}
                className="hover:bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-sm transition"
                style={{ backgroundColor: "#21441e" }}
                onClick={() => sendMessage(opt)}
              >
                {opt.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
