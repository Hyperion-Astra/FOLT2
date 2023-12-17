import React from 'react';
import "./Hero.css";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
          {
            "id": 1,
            "title": "BRIDGE BETWEEN PEOPLE AND GOVERNMENT",
            "description": "Empowering Governance through digital smartness & innovation",
            "image": "/sunset.jpg",
            "link": "services"
          },
          {
            "id": 2,
            "title": "DIGITAL TRANSFORMATION",
            "description": "Drive eficiency & agility with our digital transformation services",
            "image": "/digit.jpg",
            "link": "services"
          },
          {
            "id": 3,
            "title": "MODERN WORKPLACE SERVICES",
            "description": "Stay Resilient & maintain Business continuity.",
            "image": "/workplace.jpeg",
            "link": "services"
        },
        {
            "id": 4,
            "title": "MANAGED SECURITY SERVICES",
            "description": "Safeguard your IT Infrastructure with our proactive security services",
            "image": "/security.jpg",
            "link": "services"
        }
        ]

const Hero = () => {
    return (
        <section className="hero-block" id='home'>
        <Carousel>
            {
                heroData.map(hero => {
                    return(
                        <Carousel.Item key={hero.id}>
                            <img
                            className='d-block w-100'
                            src={hero.image}
                            alt={"Slide" + hero.id}
                            />
                            <Carousel.Caption>
                            <h1>{hero.title}</h1>
                            <p>{hero.description}</p>
                            <Link to={hero.link}><div className="button">Learn more</div></Link>
                            {/* <div className="flexCenter stats">
                            <div className="flexColCenter stat">
                                <span><CountUp start={2750} end={3010} duration={4} />
                                <span>+</span></span>
                                <span className='secondaryText'>Services Rendered</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span><CountUp start={39} end={53} duration={4} />
                                <span>+</span></span>
                                <span className='secondaryText'>Technologies</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span><CountUp end={29} />
                                <span>+</span></span>
                                <span className='secondaryText'>Awards</span>
                            </div>
                        </div> */}
                            </Carousel.Caption>
                </Carousel.Item>
                    )
                })
            }
        </Carousel>
        </section>
    );
}

export default Hero
