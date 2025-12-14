import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  // Estado del carrito
  const [cart, setCart] = useState([]);
  const [fullLoad, setFullLoad] = useState(false); // Flag o bandera

  useEffect(() => {
    const cartSaved = localStorage.getItem("cart"); 
    if (cartSaved) {
      setCart(JSON.parse(cartSaved));
    }
    setFullLoad(true); // Marca que la carga inicial ha terminado
  }, []);       

  // cada vez que carrito cambie, guardarlo en localStorage
useEffect(() => {
  if (fullLoad && cart.length > 0) { // ← SOLO guardar si hay items
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (fullLoad && cart.length === 0) {
    localStorage.removeItem("cart"); 
  }
}, [cart, fullLoad]);

  // Funciones para el carrito
  // agregar al carrito 
const appendToCart = (product) => {
    setCart(prevCart => {
      const productExist = prevCart.find(item => item.id === product.id);
     
      if (productExist) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success(`Producto ${product.name} agregado.`);
  };

  const emptyCart = () => {
    setCart([]);
  };


  //vaciar el carrito
  const deleteToCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Quitar elementos del carrito
   const removeQuantity = (idProduct) => {
    const cartUpdated = cart.map(product => {
      if (product.id === idProduct) {
        const currentQuantity = product.quantity || 1;
        if (currentQuantity === 1) {
          return null;
        }
        return { ...product, quantity: currentQuantity - 1 };
      }
      return product;
    }).filter(product => product !== null);


    setCart(cartUpdated);
  };
// agregar elementos al carrito
    const appendQuantity = (idProduct) => {
    const newCart = cart.map(product => {
      if (product.id === idProduct) {
        return {
          ...product,
          quantity: (product.quantity || 1) + 1
        };
      }
      return product;
    });
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + (Number(item.price) * quantity);
  }, 0);
 
  // Valor que se provee a todos los componentes
  const value = {  
    // Carrito
    cart,
    appendToCart,
    emptyCart,
    deleteToCart,

    // f(x) de Cantidad
    appendQuantity,
    removeQuantity,

    // f(x) total
    total
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de CartProvider");
  }
  return context;
}
