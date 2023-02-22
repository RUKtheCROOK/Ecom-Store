import "./adminproducts.css";
import { useState } from "react";

function AdminProducts() {
  const [products, setProducts] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  function textChanged(event) {
    let text = event.target.value;
    let attribute = event.target.name;

    let copy = { ...products };
    copy[attribute] = text;

    setProducts(copy);
  }
  function save() {
    console.log("product saved: ", products);

    let copy = [...allProducts];
    copy.push(products);
    setAllProducts(copy);
  }
  return (
    <div className="adminproducts">
      <h1>Admin Products</h1>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            name="title"
            onChange={textChanged}
            type="text"
            id="txt-title"
            className="form-control"
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
            className="form-control"
            placeholder="Category Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            name="image"
            onChange={textChanged}
            type="file"
            id="img-image"
            className="form-control"
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
            className="form-control"
          />
        </div>
        <button className="btn btn-dark" onClick={save}>
          Save
        </button>
      </div>
      <ul>
        {allProducts.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
