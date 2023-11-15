import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>MODERN WORKPLACE <br />SERVICES</h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Stay resilient & maintain business continuity</span>
                        <span className='secondaryText'>Safeguard your IT infrastructure with our proactive security services</span>
                    </div>
                    <div className="button">Learn more</div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span><CountUp start={2750} end={3009} duration={4} />
                            <span>+</span></span>
                            <span className='secondaryText'>Services Rendered</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span><CountUp start={42} end={53} duration={4} />
                            <span>+</span></span>
                            <span className='secondaryText'>Technologies</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span><CountUp end={29} />
                            <span>+</span></span>
                            <span className='secondaryText'>Awards</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
