import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Contact from './contact/contact';

const Footer = () => {
    
    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);

return (
    <div>
        <section data-aos = "fade-right" className='lame'>
<div className='game flexCenter'>
    <img src="./mss/nse-logo.webp" alt="llt" />
    <img src="./mss/cmmi-logo.png" alt="llt" />
    <img src="./mss/microsoft-logo.webp" alt="llt" />
    <img src="./mss/gsl-logo.webp" alt="llt" />
    <img src="./mss/sap-logo.webp" alt="llt" />
</div>
</section>
    </div>
    )
}

export default Footer
