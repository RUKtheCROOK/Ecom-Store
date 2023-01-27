import "./navbar.css";

function Navbar() {
  return (
    <div class="navigationbar">
      <ul class="nav justify-content-center">
        <li class="nav-item navborder">
          <a class="nav-link navtext" aria-current="page" href="#">
            🏡 Home
          </a>
        </li>
        <li class="nav-item navborder">
          <a class="nav-link navtext" href="#">
            📒 Next Page
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
