// interface for the data context

import { createContext } from "react";

// interface, promises, blueprints
// no values for implementation and instead just provides the shape of the data context

const DataContext = createContext({
  // data
  cart: [],
  user: {},
  // functions
  addToCart: () => {},
  removeFromCart: () => {},
});

export default DataContext;
