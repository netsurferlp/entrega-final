import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const  AdminPanel = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  // Obtener el token actual
  const tokenActual = localStorage.getItem('authToken');

  // Función para navegar al formulario de agregar producto
  const handleAppendProduct = () => {
    navigate('/curso_react/productform');
  };

  return (

    <div class="card w-100 text-bg-secondary  text-center mx-auto mt-4 pt-2 pl-2">
         <h2 class="card-text">Panel Administrativo</h2>
      
          <p><strong>Sesión iniciada como: </strong> {user.name}</p>
       
        {/* TOKEN */}
        <div >
          <strong>Token de autenticación:</strong>
          <br />
          <code>{tokenActual}</code>
        </div>

        {/* SECCIÓN DE ACCIONES ADMIN */}
     
           <div class="card-header">
    Operaciones:
  </div>
  <div class="my-3 sm-py-2">
    <button type='button' class="sm-my-auto ms-2 btn btn-primary text-white mt-2 "
              onClick={handleAppendProduct}
         
            >
              Agregar Productos
            </button>
               

<Link
              to="/curso_react/products"
           
            ><button type='button' class=" sm-my-auto ms-2 btn btn-primary text-white mt-2"> Ver / Editar / Eliminar Productos</button></Link>




    
    <button type='button' class="sm-my-auto ms-2 btn btn-primary text-white mt-2 "
          onClick={logout}
        
        >
          Cerrar sesión
        </button>
  </div>
</div>

 
  )
}

export default AdminPanel;