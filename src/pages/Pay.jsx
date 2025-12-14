import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

const Pay = ()=> {
  const { user, logout } = useAuthContext();
  const { cart, total, emptyCart, appendQuantity, removeQuantity } = useCartContext();
  const navigate = useNavigate();


  const tokenActual = localStorage.getItem('authToken');


  // Función para finalizar compra
  const shop = () => {
    alert("¡Compra realizada con éxito!");
    emptyCart(); // Limpiar carrito después de comprar
    navigate("/curso_react/products");
    
  };

    const handleLogout = () => {
    emptyCart(); // ← Primero vaciar el carrito en el estado
    logout(); // ← Luego cerrar sesión
    navigate("/curso_react/products"); // ← Redirigir
  };


  return (
    <>
<div class="card text-bg-info mb-3 mt-3 mx-auto px-5 w-100" >
  <div class="card-header"><strong>Información de Sesión Actual:</strong></div>
  <div class="card-body">
    <h5 class="card-title"><p>Hola, {user.name}</p> Email: {user.email}</h5>
    <p class="card-text"><div >
          <strong>Token:</strong> {tokenActual}
        </div>
        <div>
        <button class="float-end mt-3"onClick={handleLogout}>Cerrar sesión</button>
       
      </div></p>
  </div>
</div>

<div class="card text-bg-primary mb-3 mt-3 mx-auto px-5 w-100" >
  <div class="card-header"><strong>Tu compra:</strong></div>
  <div class="card-body">
    
    <p class="card-text">{cart.length > 0 ? (
         <>
            {cart.map((product) => {
              const quantity = Number(product.quantity || 1);
              const unitPrice = Number(product.price || 0);
              const subtotal = quantity * unitPrice;
              return (


                <div key={product.id} >
                 

                 <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.avatar} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text"><div>Precio unidad: ${Number(unitPrice).toFixed(3)}</div>
                    <div className="border-bottom">Cantidad: {quantity}</div>
                    <div className="mb-4"><strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong></div>
                   </p>
        <p class="card-text"><div >
                      <button  class="btn btn-outline-primary btn-light mb-2 mt-2 ms-2  float-end "onClick={() => removeQuantity(product.id)}>- Quitar Cantidad</button>
                      
                      <button class=" btn btn-outline-primary btn-light mb-2 mt-2  float-end" onClick={() => appendQuantity(product.id)}>+ Agregar Cantidad</button>
  
                    </div>
                    
                   </p>
                   
      </div>
    </div>
  </div>
</div>
         
                </div>
              );
            })}
            
            <h3 className=" fs-4 fw-bold text-dark bg-light rounded-4 p-3 shadow-sm text-end">Total a pagar: ${Number(total).toFixed(3)}</h3>
        
</>

        ) : (
          <p>No hay productos en el carrito</p>
        )}</p>
  </div>
  <div>
        <button className="float-end mt-3" onClick={emptyCart}>
          Vaciar Carrito
        </button>
      </div>


      <div className="mt-2">
        <button className="float-end mt-3 mb-2 ms-2" onClick={() => navigate("/curso_react/products")}>
          {cart.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
        </button>
        {cart.length > 0 && (
          <button className="float-end mt-3 mb-2 " onClick={shop}>
            Confirmar y Pagar
          </button>
        )}
      </div>
</div>










     
    </>
  );
}


export default  Pay;