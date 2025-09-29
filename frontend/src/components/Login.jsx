import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

function Login({ onSwitch }) {
  const [body, setBody] = useState({ username: "", password: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post("http://localhost:3100/login", body)
      .then(({ data }) => {
        // Redirigimos al homepage SOLO si el login(credenciales) es correcto
        console.log("Todo salió bien:", data);

        //Se guarda el usuario logueado
        console.log("Usuario recibido:", data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/Homepage");
      })
      .catch((err) => {
        // Aquí si el login es incorrecto ya no redirigimos, mostramos error
        console.error("Error en login:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Usuario o contraseña inválidos");
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md w-1/5 text-center">
        <h1 className="text-4xl font-sans font-bold text-[#346530] mb-8">
          NICAXPLORA
        </h1>

        {/* Este es el header de navegacion entre Signup y Login */}
        <div className="flex flex-row mb-8 rounded-full">
          <button className="w-full bg-[#346530] text-white py-2 rounded-l-2xl">
            Iniciar sesión
          </button>
          <button
            onClick={onSwitch}
            className="w-full border-2 border-l-0 text-[#346530] hover:bg-slate-300 rounded-r-2xl py-2 transition-all"
          >
            Registrarse
          </button>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={body.username}
          onChange={inputChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={body.password}
          onChange={inputChange}
          name="password"
        />

        <button
          onClick={onSubmit}
          className="w-full bg-[#346530] mt-4 text-white py-2 rounded-lg text-xl font-semibold hover:bg-[#1d3a1b] transition-all"
        >
          Iniciar sesión
        </button>

        <p className="mt-4 text-sm text-slate-400">
          ¿No tienes cuenta?{" "}
          <button
            onClick={onSwitch}
            className="text-[#346530] hover:underline"
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
