import "./navbar.css";

function Navbar() {
  return (
    <div className="navigationbar">
      <ul className="nav justify-content-center">
        <li className="nav-item navborder">
          <a className="nav-link navtext" aria-current="page" href="#">
            🏡 Home
          </a>
        </li>
        <li className="nav-item navborder">
          <a className="nav-link navtext" href="#">
            📒 Next Page
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
