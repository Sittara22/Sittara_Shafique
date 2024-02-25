import React from 'react'
import './contact_me.css'
import { useRef } from 'react'
import Facebook from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


function Contact_me() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8qrj3wj', 'template_izkpjdx', form.current,'aV2GyCik2lQWcGSd-',
      ).then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email has been sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      };
  return (
    <div>
      <section id="Contact_me">
        <h2 className='title'>Contact Me</h2>
        <span className="contactDesc">
            Please fill out the form below to discuss about any work oppertunities.
        </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name'name='your_name'/>
            <input type="email" className='email' placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'/>
            <button className="submitBtn" type='submit' value='Send'>Submit</button>
        </form>
        <div className="links">
            <img src={Facebook} alt="Facebook" className="link" />
            <img src={Twitter} alt="Twitter" className="link" />
            <img src={Instagram} alt="Instagram" className="link" />
        </div>
      </section>
    </div>
  )
}

export default Contact_me

