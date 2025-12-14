import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDelete=()=> {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
 
  const [loading, setLoading] = useState(false);

  // Función para eliminar producto
  const productDelete = async () => {
    if (!product) return;
   
    setLoading(true);
    try {
      const responce = await
      fetch(`https://68f90236deff18f212b85f32.mockapi.io/netsurferlp/product/${product.id}`, {
        method: 'DELETE',
      });
     
      if (!responce.ok) {
        throw new Error('Error al eliminar el producto.');
      }


      alert('Producto eliminado correctamente.');
     
     navigate('/curso_react/products');
     setTimeout(() => {
      window.location.reload();
    }, 100);
     
    } catch (error) {
      console.error(error.message);
      alert('Hubo un problema al eliminar el producto.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    const confirm = window.confirm(
      `¿Estás seguro de que deseas eliminar el producto "${product.name}"?\n\nEsta acción no se puede deshacer.`
    );
   
    if (confirm) {
      productDelete();
    }
  };


  return (

    <>
<div class="card mb-3 w-100 mx-auto mt-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.avatar} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card text-bg-danger mb-3" >
  <div class="card-header">Eliminar Producto?</div>
  <div class="card-body">
    <h5 class="card-title">¿Estás seguro de que deseas eliminar este producto?</h5>
    <p class="card-text"><p><strong>Nombre:</strong> {product.name}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Categoría:</strong> {product.category || 'Sin categoría'}</p>
          <p><strong>Descripción:</strong> {product.description}</p></p>
       
  </div>
     
</div>
 <p class="text-danger">
          Esta acción no se puede deshacer. El producto será eliminado permanentemente.
        </p>
         <div class="float-end">
        <button
          class="btn btn-primary mb-2 mt-2 me-1"
          onClick={handleDelete}
          disabled={loading}
      
        >
          {loading ? 'Eliminando...' : 'Sí, Eliminar'}
        </button>
       
        <button
          class="btn btn-primary mb-2 mt-2 ms-2 me-1"
          onClick={() => navigate('/curso_react/products')}
          disabled={loading}
    
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
</div>







    
    </>
  );
}
 export default ProductDelete;
