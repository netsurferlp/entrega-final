import React, { createContext, useState, useContext, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Valida el Producto
  const validateProduct = (product) => {
    const errores = {};

    // nombre
    if (!product.name?.trim()) {
      errorMessage.name = 'El nombre es obligatorio.';
    }

    // precio
    if (!product.price?.toString().trim()) {
      errorMessage.price = 'El precio es obligatorio.';
    } else {
      const validPrice = product.price.toString().replace(/\./g, '').replace(',', '.');
      const numericPrice = parseFloat(validPrice);
     
      if (!/^[\d.,]+$/.test(product.price.toString().replace(/\./g, ''))) {
        errorMessage.price = 'Solo números, puntos o comas.';
      } else if (isNaN(numericPrice)) {
        errorMessage.price = 'Precio no válido.';
      } else if (numericPrice <= 0) {
        errorMessage.price = 'Debe ser mayor a 0.';
      }
    }

    // descripción
    if (!product.description?.trim()) {
      errorMessage.description = 'La descripción es obligatoria.';
    } else if (product.description.length < 10) {
      errorMessage.description = 'Mínimo 10 caracteres.';
    } else if (product.description.length > 200) {
      errorMessage.description = 'Máximo 200 caracteres.';
    }

    return errores;
  };

  // Valida el Formulario
  const validate = (product) => {
    const errors = validateProduct(product);
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
// carga los productos
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const responce = await fetch('https://68f90236deff18f212b85f32.mockapi.io/netsurferlp/product');
        if (!responce.ok) throw new Error('Error al cargar productos');
        const data = await responce.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setError("Hubo un problema al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);
// agrega productos al inventario
  const appendProduct = async (newProduct) => {
    try {
      const responce = await fetch('https://68f90236deff18f212b85f32.mockapi.io/netsurferlp/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (!responce.ok) throw new Error('Error al agregar el producto');

      const data = await responce.json();
      setProducts(prev => [...prev, data]);
      return data;
    } catch (error) {
      console.error('Error al agregar producto:', error);
      throw error;
    }
  };
// edita productos del inventario
  const editProduct = async (productUpdate) => {
    try {
      const responce = await fetch(`https://68f90236deff18f212b85f32.mockapi.io/netsurferlp/product/${productUpdate.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productUpdate),
      });

      if (!responce.ok) throw new Error('Error al editar el producto');

      const data = await responce.json();
      setProducts(prev =>
        prev.map(product =>
          product.id === productUpdate.id ? data : product
        )
      );
      return data;
    } catch (error) {
      console.error('Error al editar producto:', error);
      throw error;
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        appendProduct,
        editProduct,
        validateProduct,
        validate
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook personalizado para el contexto
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts debe ser usado dentro de un ProductsProvider');
  }
  return context;
};


