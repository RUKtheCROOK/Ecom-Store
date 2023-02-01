import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <div className="logobackground">
        <img class="logo" src="/images/storelogo.png" alt="store logo" />
      </div>

      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
