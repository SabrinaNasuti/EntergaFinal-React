import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import navbarStyle from "./NavbarStyle/NavbarStyle.module.css";

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2 bg-danger-subtle">
      <div className=" bg-danger-subtle">
        <Link to="/">
          <img src={logo} alt="logo-AMBakery" className={navbarStyle.logo} />
        </Link>
        <div>
          <Link to="/section/tortas">
            <button className="btn btn-outline-dark mx-2">Tortas</button>
          </Link>
          <Link to="/section/macarons">
            <button className="btn btn-outline-dark mx-2">Macarons</button>
          </Link>
          <Link to="/section/alfajores">
            <button className="btn btn-outline-dark mx-2">Alfajores</button>
          </Link>
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};
