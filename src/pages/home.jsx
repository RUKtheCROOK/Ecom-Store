import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome Home</h1>
      <Link className="btn btn-dark link" to="/catalog">
        Go to Catalog
      </Link>
    </div>
  );
}

export default Home;
