import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js";

export const ItemListContainer = () => {
  const { section } = useParams();

  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (section) => {
    const myProducts = section
      ? query(collection(db, "products"), where("section", "==", section))
      : collection(db, "products");

    getDocs(myProducts).then((response) => {
      const productList = response.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });

      setproducts(productList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(section);
  }, [section]);

  return (
    <>{isLoading ? <h3>Cargando...</h3> : <ItemList products={products} />};</>
  );
};
