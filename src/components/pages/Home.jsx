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
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        window.scrollTo(0, 0);
    }
    }, [location]);


return (
<div>
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
    <Experience />
    <Resources />
    <Footer />
</div>
</div>
)
}

export default Home
