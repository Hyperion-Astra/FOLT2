import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Experience = () => {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);


    return (
    <section className='serve'>
        <div data-aos = "fade-right" className="left-sec">
            <h1>Experience peace of mind with our trusted <span className='enterprise'>Managed Security Services</span></h1>
            <div className="wand">
                <div className="wap">
                    <img src="./mss/Mss-icon-01.png" alt="llt" />
                    <p>SOC-as-a-Service</p>
                </div>
                <div className="wap">
                    <img src="./mss/Mss-icon-02.png" alt="llt" />
                    <p>Cloud Security</p>
                </div>
                <div className="wap">
                    <img src="./mss/Mss-icon-03.png" alt="llt" />
                    <p>Email Security & Protection</p>
                </div>
            </div>
            <div className="wand">
                <div className="wap">
                    <img src="./mss/Mss-icon-04.png" alt="llt" />
                    <p>VAPT Service</p>
                </div>
                <div className="wap">
                    <img src="./mss/Mss-icon-05.png" alt="llt" />
                    <p>Endpoint Security</p>
                </div>
                <div className="wap">
                    <img src="./mss/Mss-icon-06.png" alt="llt" />
                    <p>Website & App Security</p>
                </div>
            </div>
            <div className="wand">
                <div className="wap">
                    <img src="./mss/Mss-icon-07.png" alt="llt" />
                    <p>Security Awareness Training</p>
                </div>
                <div className="wap">
                    <img src="./mss/Mss-icon-08.png" alt="llt" />
                    <p>Identify and Access Management</p>
                </div>
                <div className="wap">
                    <img src="./mss/Mss-icon-09.png" alt="llt" />
                    <p>Managed Detection and Response Services</p>
                </div>
            </div>
            <div className="rep">
            <Link to="/services"><button>Explore Managed Security Services</button></Link>

            </div>

        </div>
        <div data-aos = "fade-left" className="right-sec">
            <img src="./tech/managed.jpg" alt="llt" style={{border: '8px solid #000080'}} />

        </div>
    </section>
    )
}

export default Experience
