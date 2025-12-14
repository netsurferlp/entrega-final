import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";




const Login= ()=> {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const ubication = useLocation();

  const [form, setForm] = useState({ name: "", email: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Verificar credenciales (admin@netsurferlp)
    if (form.name === "admin" && form.email === "admin@netsurferlp") {
      // Guarda el email ingresado y pasa nombre para el token admin
      localStorage.setItem("authEmail", form.email);
      login("admin", form.email );
      navigate("/curso_react/adminpanel");
    }
    // Lógica para usuarios normales - SOLO si NO es admin
    else if (
      form.name &&
      form.name &&
      form.name !== "admin"
    ) {
  // Guarda el email ingresado y pasa nombre para el token user
  localStorage.setItem("authEmail", form.email);
  login(form.name, form.email) ;

      // Si venía del carrito, redirige a pagar
      if (ubication.state?.cart) {
        navigate("/curso_react/pay", { state: { cart: ubication.state.cart } });
      } else {
        navigate("/curso_react/products");
      }
    } else {
      alert(
        "Credenciales de administrador incorrectas. Usa: admin / 1234@admin"
      );
    }
  };

  return (
    <div className="card w-100 text-bg-secondary mx-auto mt-3 px-5">
      <h2>Inicia sesión para continuar</h2>
      <form onSubmit={handleLogin} >
        <label for="nombre" class="form-label">Nombre de Usuario</label>
        <input id="nombre"
        className="form-control "
          type="text"
          placeholder="Nombre completo"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />
        <label for="email" class="form-label">Correo Electrónico</label>
        <input id="email"
        className="form-control"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />
        <hr/>
        <div class="float-end">
        <button type="submit" class="btn btn-primary mb-2 mt-2 ">Iniciar Sesión</button>
        
        <button type="button" onClick={() => navigate("/curso_react/products")} class="btn btn-primary mb-2 mt-2 ms-2
         ">
          Cancelar
        </button>
        </div>
      </form>
      <p class="text-center">
        <strong>¿No recuerdas tus credenciales de admin?(admin@netsurferlp)</strong>
        </p>

    </div>
  );
}
export default Login;