import React, { useState  } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    const location = useLocation();
    const [menuOpened, setMenuOpened] = useState(false);
    const [servicesDropdownOpened, setServicesDropdownOpened] = useState(false);
    const [companyDropdownOpened, setCompanyDropdownOpened] = useState(false);


const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) 
    {
        return {right: !menuOpened && "-100%"}
    }
};
    const handleServicesDropdown = () => {
        setServicesDropdownOpened(!servicesDropdownOpened);
    };
    const handleCompanyDropdown = () => {
        setCompanyDropdownOpened(!companyDropdownOpened);
      };
    return (
        <div>
        <section className="h-wrapper">
          <div id='contain' className="flexCenter paddings innerWidth h-container">
            <Link to="/">
              <img src="/crest-preview.png" alt="Logo" width={100} />
              <span style={{ display: 'inline', textDecoration: 'none !important', color: '#fff' }}>The Driving Force Behind Revolutionary Change...</span>
            </Link>
            <OutsideClickHandler
              onOutsideClick={() => {
                setMenuOpened(false);
                setServicesDropdownOpened(false);
              }}
            >
              <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <div
                  className="services-dropdown"
                  onMouseEnter={handleServicesDropdown}
                  onMouseLeave={handleServicesDropdown}
                >
                  <Link  to="/services"><span>Services</span></Link>
                  {servicesDropdownOpened && (
                    <div className="services-dropdown-content">
                      {/* Main Options */}
                      <div className="main-options">
                        <div className="sub-options">
                          {/* Sub-Options */}
                          {/* Option 1 */}
                          <div className="sub-option">
                            <Link to="/services">Enterprise Software Services -
                            <ul>
                                <li>Digital Engineering</li>
                                <li>Enterprise Architecture</li>
                                <li> Cloud Applications Development</li>
                                <li>Mobile Applications</li>
                                <li>Enterprise DevOps</li>
                            </ul>
                            </Link>
                          </div>
                          {/* Option 2 */}
                          <div className="sub-option">
                          <Link to="/services">Digital Transformation -
                            <ul>
                            <li>Applied AI</li>
                            <li>Data Analytics </li>
                            <li>BlockChain & IoT</li>
                            <li>Robotic Process Automation</li>
                            </ul>
                            </Link>
                          </div>
                          <div className="sub-option">
                          <Link to="/services">ERP Solutions -
                            <ul>
                            <li>SAP Business One HANA</li>
                            <li>SAP S/4 HANA </li>
                            <li>SAP SuccessFactors</li>
                            <li>Hosted Cloud Solution for SAP</li>
                            </ul>
                            </Link>
                          </div>
                          <div className="sub-option">
                          <Link to="/services">E-Governance Services -
                            <ul>
                            <li>E-Governance Platforms Development</li>
                            <li>Single Window Solution & Dashboards </li>
                            <li>G2C, G2B, G2G Portal</li>
                            <li>Manpower Services</li>
                            </ul>
                            </Link>
                          </div>
                          <div className="sub-option">
                          <Link to="/services">Managed Security Services -
                            <ul>
                            <li>SOC-as-a-Service</li>
                            <li>Cloud Security </li>
                            <li>Email Security and Protection</li>
                            <li>VAPT Service</li>
                            <li>Endpoint Security</li>
                            <li>Website & Application Security</li>
                            <li>Security Awareness Training</li>
                            <li>Identity and Access Management</li>
                            <li>Managed Detection and Response Services</li>
                            </ul>
                            </Link>
                          </div>
                          <div className="sub-option">
                          <Link to="/services">Modern Workplace Services -
                            <ul>
                            <li>Data Center</li>
                            <li>Communication Services</li>
                            <li>IT Consulting</li>
                            <li>Backup & Disaster Recovery</li>
                            <li>Call Center / IP Telephony</li>
                            </ul>
                            </Link>
                          </div>
                          <div className="sub-option">
                          <Link to="/services">Cloud Solutions -
                            <ul>
                            <li>Public, Private, Hybrid Cloud</li>
                            <li>Virtual Desktops on Cloud</li>
                            <li>Cloud Monitoring and Management</li>
                            <li>Silver Cloud</li>
                            </ul>
                            </Link>
                          </div>
                          </div>
                      </div>
                    </div>
            )}
                </div>
                <Link  to="/technologies">Technologies</Link>
                <Link  to="/portfolio">Portfolio</Link>
                <Link  to="/foltlab">FoltLab</Link>
                <div
             className="company-dropdown"
             onMouseEnter={handleCompanyDropdown}
             onMouseLeave={handleCompanyDropdown}>
            <Link to="/"><span>Company Overview</span></Link>
            {companyDropdownOpened && (
            <div className="company-dropdown-content">
<Link to="/about">About</Link>
<Link to="/why-us">Why Us</Link>
<Link to="/contact">Contact Us!</Link>
</div>
)}
</div>
              </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
          </div>
        </section>
      </div>
)
            };

export default Header
