import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

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
        toast.success("¡Inicio de sesión exitoso!");
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/Homepage");
      })
      .catch((err) => {
        console.error("Error en login:", err.response?.data || err.message);
        toast.error(err.response?.data?.message || "Error en inicio de sesión");
       
      });
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/HTstLsxw/Nica-Xplora-1-Mesa-de-trabajo-1.jpg')",
      }}
    >

      <div className="p-6 min-w-[350px] bg-white/90 backdrop-blur-lg rounded-xl shadow-lg w-1/5 text-center shadow-emerald-500" style={{ backgroundColor: "#141414 " }}>
        <h1 className="text-4xl font-sans font-bold text-[#348050] mb-8">
          NICAXPLORA
        </h1>

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
          className="w-full bg-[#424242] mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
          value={body.username}
          onChange={inputChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#424242] mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
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
