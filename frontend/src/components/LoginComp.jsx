import React from 'react'
import { Lock } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router';

// Componente de Login
function Login({ onSwitch }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-1/5 text-center">
      <h1 className='text-4xl font-sans font-bold text-[#346530] mb-8'>NICAXPLORA</h1>

      <div className='flex flex-row mb-8 rounded-full'>
          <button className="w-full bg-[#346530] text-white py-2 rounded-l-2xl">
            Iniciar sesión
          </button>

          <button onClick={onSwitch} className="w-full border-2 border-l-0 text-[#346530] hover:bg-slate-300 rounded-r-2xl py-2 transition-all">
            Registrarse
          </button>
      </div>

      <input
        type="email"
        placeholder="Correo"
        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
      />

      <button className="w-full bg-[#346530] mt-4 text-white py-2 rounded-lg text-xl font-semibold hover:bg-[#1d3a1b] transition-all">
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

      <div className='p-8 border-t-2 mt-8'>
        <Link to={"/homepage"}>
            <button className='text-base font-thin border-2 p-2 px-8 rounded-2xl text-slate-400 hover:text-slate-500 hover:bg-slate-300 hover:border-slate-300 transition-all'>
                  Continuar como invitado
            </button>
        </Link>
      </div>
    </div>
  );
}

// Componente de Signup
function Signup({ onSwitch }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-1/5 text-center">
      <h1 className='text-4xl font-sans font-bold text-[#346530] mb-8'>NICAXPLORA</h1>
      <div className='flex flex-row mb-8 rounded-full'>
          <button onClick={onSwitch} className="w-full border-2 border-r-0 text-[#346530] hover:bg-slate-300 rounded-l-2xl py-2 transition-all">
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
      />
      <input
        type="email"
        placeholder="Correo"
        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-[#388f30]"
      />
      <button className="w-full bg-[#346530] text-white py-2 rounded-lg mt-4 font-medium text-xl transition-all hover:bg-[#1d3a1b]">
        Crear cuenta
      </button>

      <p className="mt-4 text-sm text-slate-400">
        ¿Ya tienes cuenta?{" "}
        <button
          onClick={onSwitch}
          className="text-[#346530] hover:underline"
        >
          Inicia sesión
        </button>
      </p>

      <div className='p-8 border-t-2 mt-8'>
        <Link to={"/Homepage"}>
            <button className='text-base font-thin border-2 p-2 px-8 rounded-2xl text-slate-400 hover:text-slate-500 hover:bg-slate-300 hover:border-slate-300 transition-all'>
                  Continuar como invitado
            </button>
        </Link>
      </div>
    </div>
  );
}

// Manejo de Login
export default function LoginComp() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      {isLogin ? (
        <Login onSwitch={() => setIsLogin(false)} />
      ) : (
        <Signup onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}
