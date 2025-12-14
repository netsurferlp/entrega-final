
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

import Main from './components/Main';
import Header from "./components/Header";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'

const App =() => {
  

  return (
    <> 
    <div className="container-fluid " id="contenedor">
    <AuthProvider>
            <CartProvider>
              <ProductsProvider>
                                <Header />
                                <Main />
                                <Footer />
              </ProductsProvider>
            </CartProvider>
    </AuthProvider>
   </div>
    </>
  )
}

export default App