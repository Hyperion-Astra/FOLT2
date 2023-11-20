import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
            <span className='orangeText'>Do you want to contact us?</span>
            <span className='primaryText'>Our Contacts</span>
            <div className="flexColStart contactMode">
                <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icons">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span>Call</span>
                                <span>+234 704 469 4598</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
