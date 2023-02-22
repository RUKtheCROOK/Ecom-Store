import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from "./pages/admin";
import Home from "./pages/home";
import About from "./pages/about";
import FourOhFour from "./pages/404";
import GlobalData from "./store/globalData";
import Cart from "./pages/cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <GlobalData>
      <BrowserRouter>
        <div className="App">
          <div className="logobackground">
            <img
              className="logo"
              src="/images/storelogo.png"
              alt="store logo"
            />
          </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<FourOhFour />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalData>
  );
}

export default App;
