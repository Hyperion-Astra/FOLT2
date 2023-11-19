import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Header = () => {
const location = useLocation();
    return (
    <div>
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <Link to="/"><img src="./logo.png" alt="Logo" width={100} /></Link>

            <div className="flexCenter h-menu">
                <Link  to="/#services">Services</Link>
                <Link  to="/technologies">Technologies</Link>
                <Link  to="/portfolio">Portfolio</Link>
                <Link  to="/foltlab">FoltLab</Link>
                <Link  to="/investors">Investors</Link>
                <Link  to="/about">About</Link>
                <button className="button">Let's connect </button>
            </div>
            </div>
        </section>
    </div>
)
}


export default Header
