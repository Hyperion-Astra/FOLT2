import './App.css'
import Home from "./components/pages/Home";
import Nservices from './components/pages/Nservices';
import Technologies from './components/pages/Technologies';
import Portfolio from './components/pages/Portfolio';
import Foltlab from './components/pages/Foltlab';
import About from './components/pages/About';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Contact from './components/contact/contact';

function App() {
  const name = 'Folt Crest'
  return (
    <div>
      <Router>
        <main>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/services' element={<Nservices />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/foltcrestlab' element={<Foltlab />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route render={() => <h1>404: page not found</h1>} />
        </Routes>
        </main>
      </Router>
    </div>
    
    );
}

export default App;
