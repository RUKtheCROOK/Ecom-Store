import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(properties) {
  let [quantity, setQuantity] = useState(1);
  function decrease() {
    let value = quantity - 1;
    if (value < 1) {
      value = 1;
    }
    setQuantity(value);
    properties.onChange(value);
  }
  function increase() {
    let value = quantity + 1;
    setQuantity(value);
    properties.onChange(value);
  }
  return (
    <div className="quantity container">
      <button
        disabled={quantity === 1}
        className="btn btn-sm btn-dark"
        onClick={decrease}
      >
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-dark" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
