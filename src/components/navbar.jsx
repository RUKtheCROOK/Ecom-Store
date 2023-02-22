import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./../store/dataContext";

function Navbar() {
  const cart = useContext(DataContext).cart;

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <div className="navlogoback">
              <img src="/images/storelogo.png" alt="store logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navborder">
                <Link
                  className="nav-link navtext"
                  aria-current="page"
                  to="/home"
                >
                  🏡 Home
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link navtext" to="/catalog">
                  📒 Catalog
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link navtext" to="/admin">
                  🤓 Admin
                </Link>
              </li>
              <li className="nav-item navborder">
                <Link className="nav-link navtext" to="/about">
                  📗 About
                </Link>
              </li>
            </ul>
            <li className="nav-item navborder" id="form-cart">
              <Link className="nav-link navtext" to="/cart">
                🛒{cart.length} View Cart
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
