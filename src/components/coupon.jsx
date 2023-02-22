import "./coupon.css";
import { useState } from "react";

function Coupon() {
  const [coupon, setCoupon] = useState({ code: "", discount: "" });
  const [currentList, setCurrentList] = useState([]);

  function saved() {
    console.log("The coupon is", coupon);
    let copy = [...currentList];
    copy.push(coupon);
    setCurrentList(copy);
  }
  function textChanged(event) {
    let text = event.target.value;
    let attribute = event.target.name;
    let copy = { ...coupon };
    copy[attribute] = text;
    setCoupon(copy);
  }
  return (
    <div className="coupon">
      <h1>Coupon</h1>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Code:</label>
          <input
            name="code"
            onChange={textChanged}
            type="text"
            id="txt-title"
            className="form-control"
            placeholder="Coupon Code Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Discount:</label>
          <input
            name="discount"
            onChange={textChanged}
            type="number"
            id="txt-category"
            className="form-control"
            placeholder="Discount Here"
          />
        </div>
        <button onClick={saved}>Save</button>
      </div>
    </div>
  );
}

export default Coupon;
