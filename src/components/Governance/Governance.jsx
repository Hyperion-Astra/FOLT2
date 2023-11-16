import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Governance = () => {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);


    return (
    <section className='serve'>
        <div data-aos = "fade-right" className="left">
            <img src="./tech/Home-Governance.png" alt="llt" />
        </div>
        <div data-aos = "fade-left" className="left-sec">
            <h1>Working towards making Government Digital with our<span className='enterprise'> E-Governance Services</span></h1>
            <div className="wand">
                <div className="wap">
                    <img src="./tech/Egs-icon-01.png" alt="llt" />
                    <p>E-Governance Platforms Development</p>
                </div>
                <div className="wap">
                    <img src="./tech/Egs-icon-02.png" alt="llt" />
                    <p>Single Window Solution & Dashboards</p>
                </div>
                <div className="wap">
                    <img src="./tech/Egs-icon-03.png" alt="llt" />
                    <p>G2C, G2B, G2G Portal</p>
                </div>
            </div>
            <div className="wand">
            <div className="wap">
                    <img src="./tech/Egs-icon-05.png" alt="llt" />
                    <p>Manpower Services</p>
                </div>
            </div>
            <div className="rep">
                <button>Explore E-Governance Services</button>
            </div>

        </div>
    </section>
    )
}

export default Governance
