import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! 👋 Soy tu asistente de NicaXplora. ¿Qué deseas consultar?" },
  ]);

  // Opciones predeterminadas del usuario
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
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 text-center font-semibold">
        🤖 Chat NicaXplora
      </div>

      {/* Mensajes */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-80 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl text-sm shadow-sm ${
                msg.from === "user"
                  ? "bg-green-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Botones predeterminados */}
      <div className="border-t border-gray-200 p-2 bg-gray-100 flex flex-wrap gap-2 justify-center">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-sm transition"
            onClick={() => sendMessage(opt)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
