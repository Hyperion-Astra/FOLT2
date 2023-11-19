import React from 'react'
import './Resources.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Resources = () => {
    
    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);

    return (
    <section data-aos = "fade-right" className='resource'>
        <div className="first">
            <h1>We Are Folt Crest Resources</h1>
        </div>
        <div className="pics">
            <div className='face'>
                <img src="./tech/Wai-Icon-01.jpg" alt="tech" />
                <p>900+<br /> IT Professionals</p>
            </div>
            <div className='face'>
                <img src="./tech/Wai-Icon-02.jpg" alt="tech" />
                <p>1800+ <br />Customers Worldwide</p>
            </div>
            <div className='face'>
                <img src="./tech/Wai-Icon-03.jpg" alt="tech" />
                <p>Pan India<br /> Presence</p>
            </div>
            <div className='face'>
                <img src="./tech/Wai-Icon-04.jpg" alt="tech" />
                <p>Subsidiaries in<br /> US, USA and Canada</p>
            </div>
            <div className='face'>
                <img src="./tech/Wai-Icon-05.jpg" alt="tech" />
                <p>CMMi Level<br /> 5 Certified</p>
            </div>
            <div className='face'>
                <img src="./tech/Wai-Icon-06.jpg" alt="tech" />
                <p>Empaneled with central<br /> and state Governments</p>
            </div>
        </div>
    </section>
    )
}

export default Resources
