import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "../services/userService";
import { Link, useNavigate } from "react-router-dom";

function Signup({ onSwitch }) {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  const handleCreate = () => {
    setError("");

    if (!newName.trim() || !newEmail.trim() || !newPassword.trim() || !newCountry.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (newPassword.length > 10) {
      setError("La contraseña no puede contener más de 10 caracteres");
      return;
    }

    createUser({ name: newName, email: newEmail, password: newPassword, country: newCountry })
      .then((res) => {
        setUsers((prev) => [...prev, res.data]);
        setNewName("");
        setNewEmail("");
        setNewPassword("");
        setNewCountry("");
        setError("");

        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/Homepage");
      })
      .catch((err) => console.error("Error al crear usuario:", err));
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?_gl=1*1apjsut*_ga*ODM3NjkxNjY0LjE3NDcwNjg3OTM.*_ga_8JE65Q40S6*czE3NTkyMDA5NjgkbzE3JGcxJHQxNzU5MjAxMzQ5JGoyNSRsMCRoMA..')",
      }}
    >
      <div className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-md w-1/5 text-center" style={{ backgroundColor: "#141414 " }}>
        <h1 className="text-4xl font-sans font-bold text-[#348050] mb-8">NICAXPLORA</h1>

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
          className="w-full bg-[#424242] mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#424242] mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full bg-[#424242] mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="País"
          className="w-full bg-[#424242] mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
        />

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
