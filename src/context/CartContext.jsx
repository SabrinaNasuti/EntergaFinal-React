import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const [totalItem, setTotalItem] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);
  

  const addItem = (item, quantity) => {
    const cartCopy = [...cart];

    const index = cartCopy.findIndex((product) => product.id === item.id);

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      const newItem = {
        ...item,
        quantity,
        subTotal: item.price * quantity,
      };
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleTotalItem = () => {
    const newTotalItem = cart.reduce((accum, item) => accum + item.quantity, 0);
    setTotalItem(newTotalItem);
  };

  const handleTotalAmount = () => {
    const newTotalAmount = cart.reduce((accum, item) => accum + item.subTotal, 0);
    setTotalAmount(newTotalAmount);
  };

  useEffect(() => {
    handleTotalItem();
    handleTotalAmount();    
  }, [cart]);

  const objectValues = {
    cart,
    addItem,
    removeItem,
    clearCart,
    totalItem,
    totalAmount,
  };

  return (
    <CartContext.Provider value={objectValues}>{children}</CartContext.Provider>
  );
};
