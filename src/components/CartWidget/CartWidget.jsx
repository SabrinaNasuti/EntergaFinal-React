import { useContext } from "react";
import pinkCart from "../../assets/pinkCart.jpg";
import cartWidgetStyle from "./CartWidgetStyle/CartWidgetStyle.module.css";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

  const {totalItem} =useContext(CartContext);

  return (
    <div className=" justify-content-around mt-2 bg-danger-subtle">
      <img
        src={pinkCart}
        alt="pink-cart-widget"
        className={cartWidgetStyle.image}
      />
      {totalItem}
    </div>
  );
};
