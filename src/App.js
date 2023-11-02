import './App.css'
import NavBar from "./components/Navbar";
import About from './Pages/About'
import{ 
  Routes,
  Route} from "react-router-dom";
  import Hello from './Pages/hello';

function App() {
  return (
    <div className="App">
      
  <NavBar/>
  <Routes>
      <Route path="hello" element={<Hello />} /> 
      <Route path="About" element={<About />} />
      </Routes>
        
     
      
    </div>
  );
}

export default App;
