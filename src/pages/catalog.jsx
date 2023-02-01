import "./catalog.css";
import Products from "./../components/product";
import { useEffect, useState } from "react";
import DataService from "./../services/dataService";
function Catalog() {
  let [products, setProducts] = useState([]);

  useEffect(function () {
    console.log("Catalog Mounted");
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let products = service.getData();
    console.log(products);
    setProducts(products);
  }

  function magicTest() {
    console.log("Magic Test called");
    setProducts([]);
  }

  let length = setProducts.length;
  return (
    <div className="catalog container">
      <h1>Catalog</h1>
      <h5>Product Number: {products.length}</h5>
      <button className="btn btn-dark" onClick={magicTest}>
        Magic
      </button>
      <div className="products">
        {products.map((p) => (
          <Products key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
