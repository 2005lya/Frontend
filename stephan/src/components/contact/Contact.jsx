import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ge3kzcv', 'template_7e2uxhc', form.current, 'E1ED1NWVsQ_xWxG9I')
      .then((result) => {
          console.log(result.text);
          alert('send a email')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact' id='contact'>
        <h1 className='contactTitle'>Get in Touch</h1>
        <div className="contactContent">
        <div className="contactLeft">
          <p className='question'>Any questions?</p>
          <br />
          <p className='question'>Feel free to contact</p>
          <br />
          <p className='emailIcon'><i class="fa-solid fa-paper-plane"></i></p>
          <p className='contactEmail'>stephan7.xi@gmail.com</p>
        </div>
        <div className="email">
            <form className="form" ref={form} onSubmit={sendEmail}>
                <input name='name' type="text" placeholder='name' className='formInput' />
                <input name='email' type="text" placeholder='email' className='formInput' />
                <input name='subject' type="text" placeholder='subject' className='formInput' />
                <textarea name="message" type='text' placeholder='Message' cols="30" rows="10" className='formTextarea'></textarea>
                <input type="submit" value='Send Message' className='formSubmit' />
            </form>
        </div>
        </div>
    </div>
  )
}


