import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CheckOut } from "../CheckOut/CheckOut";

export const Cart = () => {
  const { cart, removeItem, clearCart, totalAmount } = useContext(CartContext);
 
  return (
    <>
      <div className="container my-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex flex-column p-3 my-2 border-1 w-50"
          >
            <img src={item.image} alt="Imagen del producto" />
            <p key={item.id}>Nombre: {item.name} </p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.subTotal}</p>
            <div>
              <button
                className="btn btn-outline-dark"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {totalAmount > 0 ? (
          <>
            <h4>Total: ${totalAmount} </h4>
            <button className="btn btn-outline-dark" onClick={clearCart}>
              Borrar Carrito
            </button>
            <Link to="/checkout">
              <button className="ms-2 btn btn-outline-dark">Comprar</button>
            </Link>
          </>
        ) : (
          <h4>Carrito Vacío </h4>
        )}
      </div>
    </>
  );
};
