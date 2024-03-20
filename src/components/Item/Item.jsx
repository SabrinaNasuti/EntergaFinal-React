import { Link } from "react-router-dom";
import itemStyle from "./ItemStyle/ItemStyle.module.css";
import { useCount } from "../../hooks/useCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Item = ({ id, name, price, image, section }) => {
  const { count, increment, decrement } = useCount();

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    
    const item = {
      id,
      name,
      price,
      image,
    };

    addItem(item, quantity);
  };

  return (
    <div className="border m-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img
            src={image}
            alt="Imagen de producto"
            className={itemStyle.imageItem}
          />
          <div className="card-body btn-outline-dark">
            <p>Precio: ${price}</p>
            <Link to={`/item/${id}`}>
              <button className="btn btn-outline-dark">Detalle</button>
            </Link>
            <div className="card-body btn-outline-dark">
              <button className="btn btn-outline-dark" onClick={decrement}>
                -
              </button>
              <span className="mx-3"> {count} </span>
              <button className="btn btn-outline-dark" onClick={increment}>
                +
              </button>
            </div>
            <button
              className="btn btn-outline-dark"
              onClick={() => onAdd(count)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
