import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "../services/userService";
import { Link, useNavigate } from "react-router-dom";

function Signup({ onSwitch }) {
  
  //Variables de estado
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [error, setError] = useState(""); // Variable de estado para errores

  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  const handleCreate = () => {
    setError(""); // Se limpian errores antes de validar

    // Validación: campos vacíos
    if (!newName.trim() || !newEmail.trim() || !newPassword.trim() || !newCountry.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Validación: longitud de contraseña
    if (newPassword.length > 10) {
      setError("La contraseña no puede contener más de 10 caracteres"); // 👈 aquí la regla
      return;
    }

    createUser({ name: newName, email: newEmail, password: newPassword, country: newCountry })
      .then((res) => {
        setUsers((prev) => [...prev, res.data]);
        setNewName("");
        setNewEmail("");
        setNewPassword("");
        setNewCountry("");
        setError(""); // limpiar errores después de éxito

        //Se guarda el usuario logueado automaticamente
        localStorage.setItem("user", JSON.stringify(res.data));

        //Redirigir al Homepage luego de crear el usuario
        navigate("/Homepage")

      })

      .catch((err) => console.error("Error al crear usuario:", err));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md w-1/5 text-center">
        <h1 className="text-4xl font-sans font-bold text-[#346530] mb-8">NICAXPLORA</h1>

        <div className="flex flex-row mb-8 rounded-full">
          <button
            onClick={onSwitch}
            className="w-full border-2 border-r-0 text-[#346530] hover:bg-slate-300 rounded-l-2xl py-2 transition-all"
          >
            Iniciar sesión
          </button>
          <button className="w-full bg-[#346530] text-white py-2 rounded-r-2xl">
            Registrarse
          </button>
        </div>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="País"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
        />

        {/* Mostrar error si existe */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleCreate}
          className="w-full bg-[#346530] text-white py-2 rounded-lg mt-4 font-medium text-xl transition-all hover:bg-[#1d3a1b]"
        >
          Crear cuenta
        </button>

        <p className="mt-4 text-sm text-slate-400">
          ¿Ya tienes cuenta?{" "}
          <button onClick={onSwitch} className="text-[#346530] hover:underline">
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
