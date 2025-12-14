import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
//rutas protegidas
const RouteProtected = ({ children, onlyAdmin = false }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <div>Cargando...</div>;
  }
 
  if (!user) {
    // Pasa el state actual (que contiene el carrito) a /login
    return <Navigate to="/curso_react/login" state={location.state} replace />;
  }

  if (onlyAdmin && user.name !== "admin") {
    return <Navigate to="/curso_react/products" replace />;
  }
  return children;
} 

export default RouteProtected;