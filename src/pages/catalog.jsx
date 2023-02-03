import "./catalog.css";
import Products from "./../components/product";
import { useEffect, useState } from "react";
import DataService from "./../services/dataService";
function Catalog() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [productDisplay, setProductDisplay] = useState([]);

  useEffect(function () {
    console.log("Catalog Mounted");
    loadCatalog();
  }, []);
  function loadCatalog() {
    let service = new DataService();
    let products = service.getData();
    console.log(products);
    setProducts(products);

    setProductDisplay(products);
    let categories = ["fruit", "vegetable"];
    setCategories(categories);
  }

  function filter(category) {
    console.log(category);
    // let list = products.filter((c) => c.category === category);
    // setProducts(list);
    // in class they did this
    let list = [];
    for (let i = 0; i < products.length; i++) {
      let p = products[i];
      if (p.category === category) {
        list.push(p);
      }
      setProductDisplay(list);
    }
  }
  function clearFilter() {
    setProductDisplay(products);
  }
  let id = 0;
  return (
    <div className="catalog container">
      <h2>Catalog</h2>
      <h5>Product Number: {products.length}</h5>
      <div className="buttons">
        <button className="btn btn-dark btn-space" onClick={clearFilter}>
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className="btn btn-dark btn-space"
            onClick={() => filter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="products">
        {productDisplay.map((p) => (
          <Products key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
