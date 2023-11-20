import React from 'react'
import Footer from '../Footer'

const About = ({match:{params:{name}}}) => {
  return (
    <div>
      <section>
        <h1>OVERVIEW</h1>
        <h4>Young</h4>
        <h3>Agile</h3>
        <h2>Lean</h2>
        <h4>Competitive</h4>
        <p>Folt crest Resources from the day it was established and regidtered with the Corporate
          Affair Commision has been endowing clients, and enterprises with its innovative IT Solutions. Our team of
          experts from all works of applied sciences work together to deliver super-smart organizational inteligience
        </p>
      </section>
      <Footer />
    </div>
  )
  }

export default About
