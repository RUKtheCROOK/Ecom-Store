import "./404.css";

function FourOhFour() {
  return (
    <div className="fourohfour">
      <div>
        <h1>404 - Page Not Found</h1>
        <a className="btn btn-dark" href="/home">
          Home
        </a>
      </div>
      <img
        src="https://i.chzbgr.com/full/6597613568/h8BA5874D/error-404"
        alt="404 img"
      />
    </div>
  );
}

export default FourOhFour;
