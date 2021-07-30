import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Nav";


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Home />
        </Router>
    </div>
  );
}

export default App;
