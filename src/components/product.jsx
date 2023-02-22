import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState, useContext } from "react";
import DataContext from "./../store/dataContext";

function Products(properties) {
  const [quantity, setQuantity] = useState(1);
  useEffect(function () {
    console.log("Product Mounted");
  }, []);

  let addToCart = useContext(DataContext).addToCart;
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
  function handleAdd() {
    console.log("Add button clicked", properties.product);
    addToCart(properties.product);
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
      <button className="btn btn-dark" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Products;
