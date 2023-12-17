import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import Header from '../Header/Header';

const Contact = () => {
    const handleMailToClick = () => {
        window.location.href = 'mailto:foltcres@foltcrestresources.com';
      };
  return (
    <div>
        <Header />
        <br /><br /><br />
    <div className='Contact' id="contact">
    <form className="form">
    <p className="title">Do you want to contact us? </p>
        <div className="flex" >
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required="" />
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="number" placeholder="" required="" />
        <span>Phone Number</span>
    </label>
    <label>
        <input className="input p-5" type="text"  placeholder="" required=""/>
        <span>Enter message</span>
    </label>
    <button onClick={handleMailToClick} className="submit">Submit</button>
</form>
</div>
    </div>
    )
}

export default Contact
