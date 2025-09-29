import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

//MANEJO DE LOGIN
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
