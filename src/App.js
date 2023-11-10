import "./App.css";
import NavBar from "./components/Navbar";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Hello from "./Pages/hello";
import Navigation from "./Pages/Navigation";
import { ProductDetails } from "./ProductDetails";
import Counter from "./Pages/Counter";
import CounterState from "./Pages/CounterState";
import DataApi from "./Pages/DataApi";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="hello" element={<Hello />} />
        <Route path="About" element={<About />} />
        <Route path="Navigation" element={<Navigation />} />
        <Route path="Product" element={<ProductDetails />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="CounterState" element={<CounterState />} />
        <Route path="DataApi" element={<DataApi />} />
      </Routes>
    </div>
  );
}

export default App;
