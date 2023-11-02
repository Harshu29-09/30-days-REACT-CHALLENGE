import './App.css'
import NavBar from "./components/Navbar";
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
      </Routes>
        
     
      
    </div>
  );
}

export default App;
