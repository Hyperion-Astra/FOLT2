import React from 'react'
import './Header.css'


const Header = () => {
    return (
    <div>
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="Logo" width={100} />

            <div className="flexCenter h-menu">
                <a href="">Services</a>
                <a href="">Technologies</a>
                <a href="">Portfolio</a>
                <a href="">TechLab</a>
                <a href="">Investors</a>
                <a href="">About</a>
                <button className="button">Let's connect </button>
            </div>
            </div>
        </section>
    </div>
)
}

export default Header
