import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";

function App() {
  return (
    <div className="App">
      <h1>React Store</h1>
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
