import "./cart.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function Cart() {
  const cart = useContext(DataContext).cart;
  let i = 0;
  return (
    <div className="cart container">
      <h1>Welcome to your Cart!</h1>
      <h3>There are {cart.length} items in your cart!</h3>
      <div className="container">
        <ul>
          <div className="flex">
            {cart.map((prod) => (
              <li key={i++}>
                <div className="flex-child">
                  <img src={prod.image} />
                </div>
                <h2>{prod.title}</h2>
                <h4>Price: ${prod.price}</h4>
                <h4>Category: {prod.category}</h4>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
