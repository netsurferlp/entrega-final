import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
// comprar el carrito te envia a pagar
 const CartShop = () => {
  const { cart, EmptyCart, appendQuantity, removeQuantity, total  } = useCartContext();

  const navigate = useNavigate();

  const goPay = () => {
    navigate("/curso_react/pagar", { state: { cart } });
  };

  return (
    <div>
      <hr />
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
                {item.name} - ${Number(item.price).toFixed(3)}
                (Cantidad: {item.quantity || 1})
                <button onClick={() => removeQuantity(item.id)}>-</button>
                 <button onClick={() => appendQuantity(item.id)}>+</button>
            </div>
          ))}
          <div>
            <hr />
            Total: ${Number(total).toFixed(3)}
          </div>
          <button onClick={EmptyCart}>Vaciar Carrito</button>
          <button onClick={goPay}>Pagar</button>
        </>
      )}
    </div>
  );
}
export default CartShop;