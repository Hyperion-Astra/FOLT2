import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import './App.css'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/sliderData';
import Resources from "./components/Resources/Resources";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header />
      <Hero />
      </div> 
      <Resources />
      <ImageSlider slides={SliderData} />;
    </div>
    );
}

export default App;
