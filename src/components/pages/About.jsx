import React from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'

const About = () => {
  const conStyle = {
    border: '2px solid #1f3e72',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '75%',
    maxWidth: '700px',
    margin: '0 auto',
    marginBottom: '20px'
  }
  return (
    <div>
      <Header />
      <div>
      <div style={conStyle} className='fin'>
      <br />
      <br />
      <h1 className='gree' style={{color: '#ffffff'}}>
        About
      </h1>
      <br />
      </div>
      </div>
      <section className='stink'>
      <br />
      <br /> <br />
      <br /> <br />
      <br />
      <div className='bout'>
        <h2 >OVERVIEW</h2>
        <h3>Young</h3>
        <h3>Agile</h3>
        <h1>Lean</h1>
        <h4>Competitive</h4>
        </div>
        <div className="paddings rain">
        <p>Folt crest Resources from the day it was established and registered with the Corporate
          Affair Commision has been endowing clients, and enterprises with its innovative IT Solutions. Our team of
          experts from all works of applied sciences work together to deliver super-smart organizational inteligience
        </p>
        <p>We firmly believe in integrating our skills with our clients needs and we acheive the right results.
          We have developed our own perfomance management systems that support our cients through the process of software development. 
          As we hav witness the evolution of technology, from Generation X to Generation Y and this helps us to get a better forsight of our future posibilities as well.
        </p>
        <h3 style={{ color: '#0058ae'}}>OUR VISION</h3>
        <p>Lies in our approach of innovating technology and enriching with a user friendly experience. We are norishing our skills with the adoption
           of emerging technologies, digital transformation and self-exploration by handling all kinds of operations cross border all over the globe.
        </p>
        <p>We work to give you the lead in the competition and take you to the top of it. The solutions we provide cover technical needs including IT Consulting, System Integration Services,
           Software Development, E-Governance Solutions, Mobility Solutions etc. and making everything possible for you with cybernetics.
        </p>
        </div>
      </section>
      <Footer />
    </div>
  )
  }

export default About
