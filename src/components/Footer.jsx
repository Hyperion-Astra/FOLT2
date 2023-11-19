import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Footer = () => {
    
    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);

return (
    <section data-aos = "fade-up" className='lame'>
        <h1 className='title'>Do you want to contact us?</h1>
    <div className="container">
	<div>
		<form>
			<div className="omrs-input-group">
				<label className="omrs-input-underlined">
                <input required />
                <span className="omrs-input-label">First Name*</span>
				</label>
			</div>
			<div className="omrs-input-group">
				<label className="omrs-input-underlined">
                <input type='email' required />
                <span className="omrs-input-label">Email*</span>
				</label>
			</div>
			<div className="omrs-input-group">
				<label className="omrs-input-underlined">
                <input required />
                <span className="omrs-input-label">Service Required*</span>
				</label>
			</div>
		</form>
	</div>
	<div>
        <form>
			<div className="omrs-input-group">
				<label className="omrs-input-filled">
                <input required />
                <span className="omrs-input-label">Last Name*</span>
				</label>
			</div>
			<div className="omrs-input-group">
				<label className="omrs-input-filled">
                <input required />
                <span className="omrs-input-label">Phone Number</span>
				</label>
			</div>

            <button className='button'>Submit</button>
		</form>
	</div>
</div>

<div className='game flexCenter'>
    <img src="./mss/nse-logo.webp" alt="llt" />
    <img src="./mss/cmmi-logo.png" alt="llt" />
    <img src="./mss/microsoft-logo.webp" alt="llt" />
    <img src="./mss/gsl-logo.webp" alt="llt" />
    <img src="./mss/sap-logo.webp" alt="llt" />
</div>
</section>
    )
}

export default Footer
