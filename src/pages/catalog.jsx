import "./catalog.css";
import Products from "./../components/product";

function Catalog() {
  return (
    <div className="catalog container">
      <h1>Catalog</h1>
      <div className="products">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}

export default Catalog;
