import "./adminproducts.css";
import { useState, useEffect } from "react";
import DataService from "./../services/dataService";
import loadProducts from "./../services/dataService";

function AdminProducts() {
  const [products, setProducts] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(function () {
    console.log("Admin Products Mounted");
    loadCatalog();
  }, []);
  async function loadCatalog() {
    let service = new DataService();
    let products = await service.getData();
    console.log(products);
    setProducts(products);
    setAllProducts(products);
  }
  function textChanged(event) {
    let text = event.target.value;
    let attribute = event.target.name;

    let copy = { ...products };
    copy[attribute] = text;

    setProducts(copy);
  }
  function save() {
    console.log("product saved: ", products);
    let savedProducts = { ...products };
    savedProducts.price = parseFloat(savedProducts.price);
    // create an instance of the service
    let service = new DataService();
    // call the save method and pass saveProducts
    service.saveProduct(savedProducts);

    let copy = [...allProducts];
    copy.push(products);
    setAllProducts(copy);
  }
  return (
    <div className="adminproducts">
      <h2>Admin Products</h2>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            name="title"
            onChange={textChanged}
            type="text"
            id="txt-title"
            className="form-control bubby-1"
            placeholder="Title Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <input
            name="category"
            onChange={textChanged}
            type="text"
            id="txt-category"
            className="form-control bubby-1"
            placeholder="Category Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            name="image"
            onChange={textChanged}
            type="text"
            id="img-image"
            className="form-control bubby-1"
            placeholder="Image Here"
          />
          {/* <select id="sel-gender" class="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Prefer not to answer</option>
          </select> */}
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            name="price"
            onChange={textChanged}
            type="number"
            id="txt-price"
            className="form-control bubby-1"
            placeholder="Price Here"
          />
        </div>
        <button className="btn btn-dark" onClick={save}>
          Save
        </button>
      </div>
      <ul>
        {allProducts.map((product) => (
          <li key={product.title}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
