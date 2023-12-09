import React, {useEffect} from 'react'
import "./Hero.css"
import CountUp from 'react-countup'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
    return (
        <Carousel>
        <Carousel.Item>
            <Carousel.Caption>
            <section className="hero-wrapper" >
                <div className="paddings innerWidth flexCenter hero-container">
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle" />
                            <h1>BRIDGE BETWEEN PEOPLE <br />AND GOVERNMENT</h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>Empowering Governance through digital smartness</span>
                            <span className='secondaryText'>& innovation</span>
                        </div>
                        <Link to="/services"><div className="button">Learn more</div></Link>
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
                            <img src="/itpic.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Carousel.Caption>
        <section className="hero-wrapper" >
                <div className="paddings innerWidth flexCenter hero-container">
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle" />
                            <h1>MANAGED SECURITY<br />SERVICES</h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>Safeguard your IT Infrastructure with</span>
                            <span className='secondaryText'>our proactive security services</span>
                        </div>
                        <Link to="/services"><div className="button">Learn more</div></Link>
                        </div>
                </div>
            </section>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption>
        <section className="hero-wrapper" >
                <div className="paddings innerWidth flexCenter hero-container">
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle" />
                            <h1>DIGITAL<br />TRANSFORMATION</h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>Drive eficiency & agility with our</span>
                            <span className='secondaryText'>digital transformation services</span>
                        </div>
                        <Link to="/services"><div className="button">Learn more</div></Link>
                        </div>
                </div>
            </section>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption>
        <section className="hero-wrapper" >
                <div className="paddings innerWidth flexCenter hero-container">
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle" />
                            <h1>MODERN WORKPLACE<br />SERVICES</h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>Stay Resilient</span>
                            <span className='secondaryText'>& maintain Business continuity.</span>
                        </div>
                        <Link to="/services"><div className="button">Learn more</div></Link>
                        </div>
                </div>
            </section>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      );
}

export default Hero
