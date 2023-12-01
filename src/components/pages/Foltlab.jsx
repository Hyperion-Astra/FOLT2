import React from 'react'
import Header from '../Header/Header'

const Foltlab = () => {
  return (
    <div>
      <Header />
      <section className='doxs'>
      <br />
      <br /> <br />
      <br /> <br />
      <br />
        <h1>Industry Demand Training Program</h1>
        <div className="boxes">
          <div className='ven'>
            <img src="tab-1.png" alt="llt" />
            <p>Artificial Intelligence &<br /> Machine Learning AI & ML</p>
          </div>
          <div className='ven'>
            <img src="tab-2.png" alt="llt" />
            <p>Robotic Process Automation<br /> RPA</p>
          </div>
          <div className='ven'>
            <img src="tab-3.png" alt="llt" />
            <p>Blockchain</p>
          </div>
          <div className='ven'>
            <img src="tab-4.png" alt="llt" />
            <p>Internet of Things IoT</p>
          </div>
          <div className='ven'>
            <img src="tab-5.png" alt="llt" />
            <p>Big Data & Analytics</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Foltlab
