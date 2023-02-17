import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn navborder" type="submit">
                🔎Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
