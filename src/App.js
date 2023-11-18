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
import RegistrationForm from "./Pages/RegistrationForm";
import FormValidation from "./Pages/FormValidation";
import ListMap from "./Pages/ListMap";
import ToDoList from "./Pages/ToDoList";
import Toggle from "./Pages/Toggle";


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
        <Route path="RegistraionForm" element={<RegistrationForm />} />
        <Route path="RegistrationForm" element={<RegistrationForm/>} />
        <Route path="FormValidation" element={<FormValidation/>} />
        <Route path="ListMap" element={<ListMap/>} />
        <Route path="ToDoList" element={<ToDoList/>} />
        <Route path="Toggle" element={<Toggle/>} />
      </Routes>
      
    </div>
  );
}

export default App;
