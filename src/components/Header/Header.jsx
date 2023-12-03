import React, { useState  } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
const location = useLocation();
const [menuOpened, setMenuOpened] = useState(false);

const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) 
    {
        return {right: !menuOpened && "-100%"}
    }
};
    return (
    <div>
        <section className="h-wrapper">
            <div id='contain' className="flexCenter paddings innerWidth h-container">
                <Link to="/"><img src="/crest-preview.png" alt="Logo" width={100} /></Link>
                <OutsideClickHandler 
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}
                >

            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >
                <Link  to="/services">Services</Link>
                <Link  to="/technologies">Technologies</Link>
                <Link  to="/portfolio">Portfolio</Link>
                <Link  to="/foltlab">FoltLab</Link>
                <Link  to="/about">About</Link>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30} />
            </div>
            </div>
        </section>
    </div>
)
            };


export default Header
