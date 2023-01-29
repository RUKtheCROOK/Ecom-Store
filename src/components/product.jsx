import "./product.css";
import QuantityPicker from "./quantityPicker";

function Products() {
  return (
    <div className="product">
      <h5>Product Title</h5>
      <img src="https://picsum.photos/150/150" alt="a placeholder image" />
      <div className="costs">
        <label className="total">Total:</label>
        <label className="price">Price:</label>
      </div>
      <QuantityPicker />
      <button className="btn btn-dark">Add</button>
    </div>
  );
}

export default Products;
