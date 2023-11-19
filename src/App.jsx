import './App.css'
import {Link, Routes} from "react-router-dom"; 
import Home from "./components/pages/Home";
import { Router, Route } from 'react-router-dom';
import Nservices from './components/pages/Nservices';
import Technologies from './components/pages/Technologies'
import Portfolio from './components/pages/Portfolio'
import Foltlab from './components/pages/Foltlab'
import Investors from './components/pages/Investors'
import About from './components/pages/About'

function App() {
  return (
    <div>
      <Home />
      {/* <Router>
        <Route path="/technologies" Component={Nservices} exact />
      </Router> */}
      {/* <Router>
        <Route path="/services" Component={Nservices} exact />
        <Route path="/technologies" Component={Technologies} exact />
        <Route path="/portfolio" Component={Portfolio} exact />
        <Route path="/foltlab" Component={Foltlab} exact />
        <Route path="/investors" Component={Investors} exact />
        <Route path="/about" Component={About} exact />
      </Router> */}
    </div>
    
    );
}

export default App;
