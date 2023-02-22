import DataContext from "./dataContext";
import { useState } from "react";

function GlobalData(properties) {
  const [cart, setCart] = useState([]);
  const [fakeUser, setFakeUser] = useState({ name: "John" });

  function addToCart(product) {
    console.log("global is called");
  }
  function removeFromCart(product) {}
  return (
    <DataContext.Provider
      value={{
        cart: cart,
        fakeUser: fakeUser,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {properties.children}
    </DataContext.Provider>
  );
}

export default GlobalData;
