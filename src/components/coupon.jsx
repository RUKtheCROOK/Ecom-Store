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
      <h2>Coupon</h2>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Code:</label>
          <input
            name="code"
            onChange={textChanged}
            type="text"
            id="txt-title"
            className="form-control bubby-1"
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
            className="form-control bubby-1"
            placeholder="Discount Here"
          />
        </div>
        <button onClick={saved} className="btn btn-dark">
          Save
        </button>
      </div>
    </div>
  );
}

export default Coupon;
