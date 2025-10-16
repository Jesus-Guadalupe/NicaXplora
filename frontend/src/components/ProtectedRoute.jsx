// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Si no hay usuario logueado, redirige a login
    return <Navigate to="/" replace />;
  }

  // Si hay usuario, renderiza la página
  return children;
};

export default ProtectedRoute;
