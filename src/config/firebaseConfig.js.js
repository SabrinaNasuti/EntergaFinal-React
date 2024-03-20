// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCFgnYZN0D4d_ShpPsTlPzK49wznra4dUE",
  authDomain: "ambakery-react.firebaseapp.com",
  projectId: "ambakery-react",
  storageBucket: "ambakery-react.appspot.com",
  messagingSenderId: "214425244402",
  appId: "1:214425244402:web:ec3646830e5041dcf5b66b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
