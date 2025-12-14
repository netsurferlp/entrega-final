import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
// barra de navegacion
const  NavBar =() => {
  const { user, isAuthenticated, logout } = useAuthContext();
  const { emptyCart, cart } = useCartContext();
  const navigate = useNavigate();

  const totalItemsCart = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    navigate("/curso_react/products");
    setTimeout(() => {
      emptyCart();
      logout();
    }, 100);
  };

  return (
    <>






      <div className="navbar navbar-expand-lg navbar-dark float-top" id="nav">
        <div className="container-fluid">
          <Link to="/curso_react/" className="navbarbrand" ><img src='https://www.netsurferlp.ar/curso_frontend/media/apple-touch-icon.png' className='rounded float-start'id="logo"/></Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='lista'>
            
            <li className="nav-item">
                <Link to="/curso_react/about" className="nav-link" id="link" >Sobre mi</Link>
              </li>


              <li className="nav-item">
                <Link to="/curso_react/services" className="nav-link" id="link" >Servicios</Link>
              </li>
              <li className="nav-item">
                <Link to="/curso_react/products" className="nav-link" id="link" >Productos</Link>
              </li>
            
            </ul>

            <div className="sm-mx-auto d-flex align-items-center gap-3">
              <ContenedorCart> 
                <IconoCart to="/curso_react/pay" className="nav-link d-flex align-items-center" id="link">
                  <span className="me-1">Carrito</span>
                  <FaShoppingCart />  
                  {totalItemsCart > 0 && (
                    <ContenedorContador>
                      {totalItemsCart}
                    </ContenedorContador>
                  )}
                </IconoCart>
              </ContenedorCart>

              {isAuthenticated ? (
                <div className="d-flex align-items-center gap-3">
                  <div >Hola, {user.name}</div>
                 
                  {user.name === "admin" && (
                    <Link to="/curso_react/adminpanel" className="nav-link " id="link">Admin Panel</Link>
                  )}
                 
                  <div onClick={handleLogout} className="btn btn-outline-light btn-sm">
                    Cerrar Sesión
                  </div>
                </div>
              ) : (
                <Link to="/curso_react/login" className="nav-link">Iniciar Sesión</Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  )
} 

export default NavBar;

// Styled Components actualizados

const ContenedorCart = styled.div`
 position: relative;
  display: flex;
  align-items: center;
`;

const IconoCart = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  gap: 5px;
 
  &:hover {
    color: yellow !important;
  }
`;

const ContenedorContador = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;