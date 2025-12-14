import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

const ProductForm =()=> {
  const navigate = useNavigate();
  const location = useLocation();
  const { appendProduct, editProduct, validate } = useProducts();
 
  // Obtener el producto pasado por el state
  const productReceived = location.state?.product;
 
  // Determina el modo
  const mode = productReceived ? "edit" : "append";
 
  // Estados del componente
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    category: '',
    avatar: ''
  });
 
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Cargar datos del producto si estamos en modo editar
  useEffect(() => {
    if (mode === "edit" && productReceived) {
      setProduct({
        id: productReceived.id || '',
        name: productReceived.name || '',
        price: productReceived.price || '',
        description: productReceived.description || '',
        category: productReceived.category || '',
        avatar: productReceived.avatar || ''
      });
    }
  }, [mode, productReceived]);

  // f(x) manejarCambios | inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    // Valida longitud max. descripción
    if (name === 'description' && value.length > 200) return;
   
    setProduct(prev => ({ ...prev, [name]: value }));
   
    // Limpiar error del campo si existe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // f(x) validarFormulario - ahora usa la validación del contexto
  const validateForm = () => {
    const result = validate(product);
    setErrors(result.errors);
    return result.isValid;
  };

  const handleSend = async (e) => {
    e.preventDefault();
   
    // Valida antes de enviar usando el contexto
    if (!validateForm()) return;

    setLoading(true);
    try {
      const productSend = {
        ...product,
        price: product.price.toString().replace(',', '.')
      };

      if (mode === "append") {
        // Usar el contexto para agregar producto
        const newProduct = await appendProduct(productSend);
        alert(`Producto "${newProduct.name}" agregado correctamente con ID: ${newProduct.id}`);
       
        // Limpiar formulario después del éxito
        setProduct({
          id: '',
          name: '',
          price: '',
          description: '',
          category: '',
          avatar: ''
        });

        setTimeout(() => {
          navigate('/curso_react/products');
        }, 100);

      } else {
        // Usar el contexto para editar producto
        await editProduct(productSend);
        alert('Producto actualizado correctamente');

        setTimeout(() => {
          navigate('/curso_react/products');
        }, 100);
      }
     
      setErrors({});
     
    } catch (error) {
      alert(`Hubo un problema al ${mode === "edit" ? 'update' : 'append'} el producto`);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    if (mode === "edit") {
      alert('Edición cancelada');
      navigate('/curso_react/products');
    }
  };

  // Renderizado del componente
  return (
         <>


<div class="card  w-100 bg-secondary mx-auto mt-3 px-5" >
   <form  onSubmit={handleSend} >
  <h2 class="text-white">
  {mode === "edit" ? 'Editar' : 'Agregar'} Producto
  {mode === "edit" && productReceived && (
        <p >
          Editando: {productReceived.name} (ID: {productReceived.id})
        </p>
      )}
  </h2>
  
      <div >
        <label  for="name" class="s-0 form-label text-white">
          Nombre: *
        </label>
        <input
          id="name"
          class="form-control  "
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          disabled={loading}
         
          placeholder="Ingrese el nombre del producto"
        />
        {errors.name && <p >{errors.name}</p>}
      </div>
    <div >
        <label  for="price" class="form-label text-white">
          Precio: *
        </label>
        <input
         id="price"
        class="form-control"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          disabled={loading}
          placeholder="Ej: 40.000"
          inputMode="decimal"
     
        />
        <div class="text-white" >
          (Usar: Formato argentino: punto para miles, sin decimales.)
        </div>
        {errors.price && <p >{errors.price}</p>}
      </div>
    <div >
        <label  for="category" class="form-label text-white">
          Categoría:
        </label>
        <input
         id="category"
        class="form-control"
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          disabled={loading}
          placeholder="Ej: Electrónica, Ropa, Hogar, etc."
      
        />
      </div>
         <div >
        <label  for="avatar" class="form-label text-white">
          Imagen (URL):
        </label>
        <input
         id="avatar"
        class="form-control"
          type="text"
          name="avatar"
          value={product.avatar}
          onChange={handleChange}
          disabled={loading}
          placeholder="https://ejemplo.com/avatar.jpg"
      
        />
      </div>
       <div >
        <label  for="description" class="form-label text-white">
          Descripción: *
        </label>
        <textarea
         id="description"
        class="form-control"
          name="description"
          value={product.description}
          onChange={handleChange}
          rows="4"
          disabled={loading}
          maxLength="200"
          placeholder="Mínimo 10 caracteres, máximo 200 caracteres"
    
        />
        <div class="text-white">
          {product.description.length}/200 caracteres
        </div>
        {errors.description && (
          <p >{errors.description}</p>
        )}
      </div>
         <div>
          <p class="text-white" >(*) Campos obligatorios</p>
          </div>
  <div class="float-end mt-1">
        <button
          type="submit"
          disabled={loading}
          class="btn btn-primary mb-2 mt-2"
      
        >
          {loading
            ? (mode === "edit" ? 'Actualizando...' : 'Agregando...')
            : (mode === "edit" ? 'Confirmar Cambios' : 'Agregar Producto'




            )
          }
        </button>
        
          {mode !== "edit" &&(


         <button
            class="btn btn-primary mb-2 mt-2 ms-2"
            type="button"
            onClick={() => navigate("/curso_react/adminpanel")}>
          
          
            Cancelar
          </button>
          )}
        
        
       
       
        {mode === "edit" && (
          <button
            class="btn btn-primary mb-2 mt-2 ms-2"
            type="button"
            onClick={cancelEdit}
          
          >
            Cancelar
          </button>
        )}
      </div>
     
    
  </form>
</div>








</>



  );
} 

export default ProductForm;
