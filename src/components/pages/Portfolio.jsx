import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Col, } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer';

const Portfolio = () => {
  const imageUrlOne = './tech/network.jpg';
  const imageUrlTwo = './tech/gathering.jpg';
  const imageUrlThree = 'download.jfif';
  const imageUrlFour = 'images.png'

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '8px',
    marginBottom: '30px'
  }
  const conStyle = {
    color: '#0058ae',
    border: '2px solid #1f3e72',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '50%',
    maxWidth: '500px',
    margin: '0 auto',
    marginBottom: '20px'
  }
  const backgroundStyle = {
    backgroundImage: 'url("/dimou.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',

  };
  const backgrStyle = {
    position: 'relative',
    width: '100%',
    height: '400px', // Set the desired height
  };
  return (
    <div>
      <Header />
      <section style={backgrStyle}>
      <section style={backgroundStyle}>
      <div style={conStyle}>
      <br />
      <br />
      <h1 className='gree' style={{color: '#ffffff'}}>
        Portfolio
      </h1>
      <br />
      <p className='text-secondary'>We back our experience with data and validation with successful client delivery and client satisfaction at it's pinnacle</p>
      </div>
      <div style={containerStyles}>
      <div>
      <div className="simple-card">
      {imageUrlOne && (
        <img src={imageUrlOne} alt="Card" className="simple-card-image" />
      )}
      <h2 className="simple-card-title">Strategic Outsourcing</h2>
    </div>  
      </div>
      <div>
      <div className="simple-card">
      {imageUrlTwo && (
        <img src={imageUrlTwo} alt="Card" className="simple-card-image" />
      )}
      <h2 className="simple-card-title">Business Consulting</h2>
    </div>
      </div>
      <div>
      <div className="simple-card">
      {imageUrlThree && (
        <img src={imageUrlThree} alt="Card" className="simple-card-image" />
      )}
      <h2 className="simple-card-title">Web and Mobile</h2>
    </div>
      </div>
      <div>
      <div className="simple-card">
      {imageUrlFour && (
        <img src={imageUrlFour} alt="Card" className="simple-card-image" />
      )}
      <h2 className="simple-card-title">System Integration</h2>
    </div>
      </div>

      </div>
      <div style={conStyle}>
      <h2>E-Governance solutions</h2>
      <p>Technology has revolutionized how Governments function and interact with the citizens globally. 
        Citizens can connect & communicate, gaining access to information with ease, in a more secure and reliable environment.
        In the midst of globalisation, and emerging technologies, government officials are exploring new waysof connecting with the citizens.
        <br />
        In-Progress - BAT System (Biometric Automated Toolset)</p> 
      </div>     
      
    </section>

    
    </section>
    {/* <Footer /> */}
    </div>
  )
}

export default Portfolio
