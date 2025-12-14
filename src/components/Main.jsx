import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Pay from "../pages/Pay";
import Login from "../pages/Login";
import AdminPanel from "../pages/AdminPanel";
import ProductForm from '../pages/ProductForm';
import ProductDelete from '../pages/ProductDelete';

import ProductDetail from "./ProductDetail";
import RouteProtected from "./RouteProtected";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// Principal de la app


const  App = () => {
  return (
    <div>
      
           
            <Routes>
             
              {/* RUTAS PÚBLICAS */}
              <Route path="/curso_react/" element={<Home />} />
              <Route path="/curso_react/about" element={<About />} />
              <Route path="/curso_react/services" element={<Services />} />
              <Route path="/curso_react/products" element={<Products />} />
              <Route path="/curso_react/products/:id" element={<ProductDetail />} />
              <Route path="/curso_react/products/:category/:id" element={<ProductDetail />} />
              <Route path="/curso_react/login" element={<Login />} />
             
              {/* RUTA PROTEGIDA - para Usuarios */}
              <Route path="/curso_react/pay" element={<RouteProtected><Pay /></RouteProtected>}/>
             
              {/* RUTA PROTEGIDA - para Admins */}
              <Route path="/curso_react/adminpanel" element={<RouteProtected onlyAdmin={true}><AdminPanel /></RouteProtected>}/>
             
              {/* Ruta para formulario Agrega/Edita*/}
              <Route
                path="/curso_react/productform"
                element={
                  <RouteProtected>
                    <ProductForm />
                  </RouteProtected>
                }
              />
             
              {/* Ruta para ELIMINAR producto */}
              <Route
                path="/curso_react/productdelete"
                element={
                  <RouteProtected>
                    <ProductDelete />
                  </RouteProtected>
                }
              />
             
              {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/curso_react/" replace />} />
            </Routes>
            
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              draggable
              pauseOnHover
              theme="dark"
            />
    
    </div>
  );
} 


export default App;