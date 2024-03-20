import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../config/firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getProductDB = (id) => {
    const productRef = doc(db, "products", id);

    getDoc(productRef).then((response) => {
      const product = {
        id: response.id,
        ...response.data(),
      };
      setItem(product);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductDB(id);
    setIsLoading(false);
  }, [id]);

  return (
    <>{isLoading ? <h3>Cargando...</h3> : item && <ItemDetail {...item} />}</>
  );
};
