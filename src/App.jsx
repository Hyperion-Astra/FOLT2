import './App.css'
import Home from "./components/pages/Home";
import Nservices from './components/pages/Nservices';
import Technologies from './components/pages/Technologies';
import Portfolio from './components/pages/Portfolio';
import Foltlab from './components/pages/Foltlab';
import About from './components/pages/About';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Nservices />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/foltcrestlab' element={<Foltlab />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
      </Router>
    </div>
    
    );
}

export default App;
