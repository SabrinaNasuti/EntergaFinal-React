import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js";

export const CheckOut = () => {
  const { cart, totalAmount, clearCart } = useContext(CartContext);

  const [formCheckOut, setFormCheckOut] = useState({
    name: "",
    lastname: "",
    cellphone: 0,
    email: "",
  });

  const [orderID, setOrderID] = useState(null);

  const handleName = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      name: e.target.value,
    });
  };
  const handleLastName = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      lastname: e.target.value,
    });
  };

  const handleCellphone = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      cellphone: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckOut,
      item: cart,
      totalAmount,
      date: serverTimestamp(),
    };

    const order = await addDoc(collection(db, "orders"), newOrder);

    setFormCheckOut({
      name: "",
      lastname: "",
      cellphone: 0,
      email: "",
    });

    clearCart();

    setOrderID(order.id);
  };

  if (orderID) {
    return <h3> Número de Orden: {orderID} </h3>;
  }

  return (
    <div className="container d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text" className="form-control" onChange={handleName} />
        <label htmlFor="">Apellido</label>
        <input
          type="text"
          className="form-control"
          value={CheckOut.lastname}
          onChange={handleLastName}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="form-control"
          value={CheckOut.email}
          onChange={handleEmail}
        />
        <label htmlFor="">Celular</label>
        <input
          type="number"
          className="form-control"
          value={CheckOut.cellphone}
          onChange={handleCellphone}
        />
        <input
          type="submit"
          className="mt-5
        btn btn-success"
          value={"Finalizar la compra"}
        />
      </form>
    </div>
  );
};
