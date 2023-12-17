import React, { useEffect } from 'react'
import './Box.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Box = () => {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);

    return (
    <section className='serve'>
        <div data-aos = "fade-right" className="left">
            <img src="./tech/transform.webp" alt="llt" style={{border: '8px solid #000080'}} />
        </div>
        <div data-aos = "fade-left" className="left-sec">
            <h1>Right mix of Digital & Industry experience for<span className='enterprise'> Digital Transformation</span></h1>
            <div className="wand">
                <div className="wap">
                    <img src="./tech/Dt-icon-01.png" alt="llt" />
                    <p>Applied AI</p>
                </div>
                <div className="wap">
                    <img src="./tech/Dt-icon-02.png" alt="llt" />
                    <p>Data Analytics</p>
                </div>
                <div className="wap">
                    <img src="./tech/Dt-icon-03.png" alt="llt" />
                    <p>BlockChain & IoT</p>
                </div>
            </div>
            <div className="wand">
            <div className="wap">
                    <img src="./tech/Dt-icon-04.png" alt="llt" />
                    <p>Robotic Process Automation</p>
                </div>
            </div>
            <div className="rep">
                <Link to="/services"><button>Explore Digital Transformation Services</button></Link>
            </div>

        </div>
    </section>
    )
}

export default Box
