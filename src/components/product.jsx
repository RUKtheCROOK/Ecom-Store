import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Products(properties) {
  let [quantity, setQuantity] = useState(1);
  useEffect(function () {
    console.log("Product Mounted");
  }, []);

  function onQuantityChange(qty) {
    console.log(qty);
    setQuantity(qty);
  }

  function total() {
    let total = properties.product.price * quantity;
    return total.toFixed(2);
  }
  function addProduct() {
    console.log(`Adding ${quantity} ${properties.product.title}`);
  }
  return (
    <div className="product">
      <h5>{properties.product.title}</h5>
      <img src={properties.product.image} alt="a placeholder image" />
      <div className="costs">
        <label className="total">Total:{"$" + total()}</label>
        <label className="price">
          Price: {"$" + properties.product.price.toFixed(2)}
        </label>
      </div>
      <QuantityPicker onChange={onQuantityChange} />
      <button className="btn btn-dark" onClick={addProduct}>
        Add
      </button>
    </div>
  );
}

export default Products;
