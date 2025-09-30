import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! 👋 Soy tu asistente de NicaXplora. ¿Qué deseas consultar?" },
  ]);

  const options = [
    { label: "🗺️ Ver destinos", response: "Aquí tienes los destinos turísticos más destacados de Nicaragua, desde León hasta Granada." },
    { label: "🚌 Transporte", response: "Contamos con información de rutas interdepartamentales y transporte urbano." },
    { label: "⭐ Favoritos", response: "Puedes guardar destinos en tu lista de favoritos para consultarlos luego." },
  ];

  const sendMessage = (option) => {
    // Añadir mensaje del usuario
    setMessages((prev) => [...prev, { from: "user", text: option.label }]);

    // Simular respuesta del bot
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: option.response }]);
    }, 600);
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-80 shadow-xl rounded-2xl border border-gray-700 flex flex-col overflow-hidden"
      style={{ backgroundColor: "#141414" }} // Fondo principal del chatbot
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-3 text-center font-semibold">
        🤖 Chat NicaXplora
      </div>

      {/* Mensajes */}
      <div
        className="flex-1 p-3 space-y-3 overflow-y-auto max-h-80"
        style={{ backgroundColor: "#1A1A1A" }} // Fondo de la zona de mensajes
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="px-4 py-2 rounded-2xl text-sm shadow-sm border border-gray-700"
              style={{
                backgroundColor: "#141414", // Fondo del mensaje
                color: msg.from === "user" ? "#ffffff" : "#e0e0e0", // Texto blanco para usuario, gris claro para bot
                borderRadius: msg.from === "user" ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 0", // Ajuste de bordes
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Botones predeterminados */}
      <div
        className="border-t border-gray-700 p-2 flex flex-wrap gap-2 justify-center"
        style={{ backgroundColor: "#1A1A1A" }} // Fondo de los botones
      >
        {options.map((opt, idx) => (
          <button
            key={idx}
            className="hover:bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-sm transition" style={{ backgroundColor: "#21441e" }} 
            onClick={() => sendMessage(opt)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
