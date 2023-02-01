import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Products(properties) {
  useEffect(function () {
    console.log("Product Mounted");
  }, []);
  return (
    <div className="product">
      <h5>{properties.product.title}</h5>
      <img src={properties.product.image} alt="a placeholder image" />
      <div className="costs">
        <label className="total">Total:{"$"}</label>
        <label className="price">
          Price: {"$" + properties.product.price.toFixed(2)}
        </label>
      </div>
      <QuantityPicker />
      <button className="btn btn-dark">Add</button>
    </div>
  );
}

export default Products;
