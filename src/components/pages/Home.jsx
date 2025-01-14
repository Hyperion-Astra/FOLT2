import React from 'react'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Box from '../Box/Box';
import Growth from '../Growth/Growth';
import Governance from '../Governance/Governance';
import Experience from '../experience/Experience';
import Resources from '../Resources/Resources';
import Footer from '../Footer';
import Contact from '../contact/contact';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

return (
<div>
    <div className="App">
    <div>
    <Header />
    <Hero />
    </div>
    <Services />
    <Box />
    <Growth />
    <Governance />
    <Experience />
    <Resources />
    <Footer />
</div>
</div>
)
}

export default Home
