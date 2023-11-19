import React, { useEffect } from 'react'
import './Services.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);

    return (
    <section className='serve' id="services">
        <div data-aos = "fade-right" className="left-sec">
            <h1>Accelerate & Revive your business with our <span className='enterprise'>Enterprise Software Services</span></h1>
            <div className="wand">
                <div className="wap">
                    <img src="./tech/Ess-icon-01.png" alt="llt" />
                    <p>Digital Engineering</p>
                </div>
                <div className="wap">
                    <img src="./tech/Ess-icon-02.png" alt="llt" />
                    <p>Enterprise Architecture</p>
                </div>
                <div className="wap">
                    <img src="./tech/Ess-icon-03.png" alt="llt" />
                    <p>Cloud Applications Development</p>
                </div>
            </div>
            <div className="wand">
            <div className="wap">
                    <img src="./tech/Ess-icon-04.png" alt="llt" />
                    <p>Mobile Applications</p>
                </div>
                <div className="wap">
                    <img src="./tech/Ess-icon-05.png" alt="llt" />
                    <p>Enterprise Dev Ops</p>
                </div>
            </div>
            <div className="rep">
                <button>Explore Enterprise Software Services</button>
            </div>

        </div>
        <div data-aos = "fade-left" className="right-sec">
            <img src="./tech/Home-Enterprise-Software-Services.png" alt="llt" />

        </div>
    </section>
    )
}

export default Services