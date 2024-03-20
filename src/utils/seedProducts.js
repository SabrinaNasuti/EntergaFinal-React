import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig.js";

const products = [
  {
    name: "Torta Ensueño",
    price: "2500",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417150/desarrollo_web/producto-1_os8f08.jpg",
    section: "tortas",
  },
  {
    name: "Torta White Album",
    price: "3000",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-3_ohyann.jpg",
    section: "tortas",
  },
  {
    name: "Torta Rainbow Party",
    price: "2700",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417075/desarrollo_web/producto-4_lylxw4.webp",
    section: "tortas",
  },
  {
    name: "Torta Green Lovers",
    price: "5000",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417080/desarrollo_web/producto-5_serrrj.jpg",
    section: "tortas",
  },
  {
    name: "Torta Sakura",
    price: "7000",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-6_cnlt0v.jpg",
    section: "tortas",
  },
  {
    name: "Violet Evergarden",
    price: "6500",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417150/desarrollo_web/header-creaciones.jpg",
    section: "tortas",
  },
  {
    name: "Macarons Stargazers",
    price: "3650",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417146/desarrollo_web/producto-7_enwyxn.jpg",
    section: "macarons",
  },
  {
    name: "Macarons Barbie",
    price: "4500",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-8_cccfqx.jpg",
    section: "macarons",
  },
  {
    name: "Alfajores Cumbre Argentina",
    price: "1250",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-2_bo01mv.jpg",
    section: "alfajores",
  },
];

export const seedProducts = () => {
  products.forEach( product => {
    addDoc(collection( db , "products"), product );
  });
};
