import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./components/Cart/Cart";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { CheckOut } from "./components/CheckOut/CheckOut";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/section/:section" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Error 404 :o </h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
