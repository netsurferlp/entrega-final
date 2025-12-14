import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const emailSaved = localStorage.getItem("authEmail");
    if (token) {
      const username = token.replace("fake-token-", "");
      setUser({
        name: username,
        email: emailSaved || "",
      });
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login= (username, emailEntered) => {
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);
    localStorage.setItem("authEmail", emailEntered);

    
    setUser({
      name: username,
      email: emailEntered || "",
    });
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user, // ← Propiedad computada
    isAdmin: user?.name === 'admin',
    loading, 

  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  }
  return context;
}
