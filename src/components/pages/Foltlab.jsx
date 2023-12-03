import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'

const Foltlab = () => {
  return (
    <div>
      <Header />
      <section className='doxs paddings'>
      <br />
      <br /> <br />
      <br /> <br />
      <br />
        <h1>Industry Demand Training Program</h1>
        <div className="boxes">
          <div className='ven'>
            <img src="tab-1.png" alt="llt" />
            <p style={{color: '#f26522'}}>Artificial Intelligence &<br /> Machine Learning AI & ML</p>
          </div>
          <div className='ven'>
            <img src="tab-2.png" alt="llt" />
            <p style={{color: '#865abf'}}>Robotic Process Automation<br /> RPA</p>
          </div>
          <div className='ven'>
            <img src="tab-3.png" alt="llt" />
            <p style={{color: '#0091d4'}}>Blockchain</p>
          </div>
          <div className='ven'>
            <img src="tab-4.png" alt="llt" />
            <p style={{color: '#26867c'}}>Internet of Things IoT</p>
          </div>
          <div className='ven'>
            <img src="tab-5.png" alt="llt" />
            <p style={{color: '#439d3d'}}>Big Data & Analytics</p>
          </div>
        </div>
        <h1>Other Training Programs</h1>
        <div className='paddings gane'>
          <p>Microsoft Technologies</p>
          <p>Frontend Technologies</p>
          <p>Andriod</p>
          <p>IOS</p>
          <p>Java</p>
          <p>Cloud Computing</p>
        </div>
        <div className='paddings gane'>
          <p>Software Testing</p>
          <p>Web Design</p>
          <p>DigitaL Marketing</p>
          <p>PHP</p>
          <p>SEO</p>
          <p>UI/UX</p>
        </div>
      </section>
      <section className='paddings'>
        <h1 style={{textAlign: 'center'}}>Empowering Everyone towards a better Future</h1>
        <div className="boxes">
          <div className="ven">
            <img src="e-larning.png" alt="it" />
            <p>E-Learning</p>
          </div>
          <div className="ven">
            <img src="webinar.png" alt="it" />
            <p>Webinars</p>
          </div>
          <div className="ven">
            <img src="workshops.png" alt="it" />
            <p>Workshops</p>
          </div>
          <div className="ven">
            <img src="corporate-training.png" alt="it" />
            <p>Corperate Training</p>
          </div>
          <div className="ven">
            <img src="live-projects.png" alt="it" />
            <p>Live Projects</p>
          </div>
        </div>
        <div className="boxes">
          <div className="ven">
            <img src="practical.png" alt="it" />
            <p>Practical Hands-on Sessions</p>
          </div>
          <div className="ven">
            <img src="fdp.png" alt="it" />
            <p>Faculty Development<br /> Programme</p>
          </div>
          <div className="ven">
            <img src="industry-experts.png" alt="it" />
            <p>Industry Experts Through<br /> On-site Visits</p>
          </div>
          <div className="ven">
            <img src="iIndustry-partnership.png" alt="it" />
            <p>Industry Partnerships</p>
          </div>
          <div className="ven">
            <img src="academia-partnership.png" alt="it" />
            <p>Academia Partnerships</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Foltlab
