import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import './App.css'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/sliderData';
import Resources from "./components/Resources/Resources";
import Services from "./components/Services/Services";
import Box from "./components/Box/Box";
import Governance from "./components/Governance/Governance";
import Growth from "./components/Growth/Growth";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header />
      <Hero />
      </div>
      <Services />
      <Box />
      <Growth />
      <Governance />
      <Resources />
      <ImageSlider slides={SliderData} />;
    </div>
    );
}

export default App;
