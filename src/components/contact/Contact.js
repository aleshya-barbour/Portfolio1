import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import Icon from '../Icon/Icon';

function Contact () {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t9v8u1h', 'template_gs054rt', form.current, 'user_8t3ZSh1CYG8JZtgsStZdo' ) 
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      })
      e.target.reset()
  }
  return (
    <div id='contact' className='form'>
      <h2>Contact</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name='user_name' required/><br />
      <label>Email</label><br />
      <input type='email'  placeholder="name@example.com" name='user_email' required /><br />
      <label>Message</label><br />
      <textarea name='message' /><br />
      <input type='submit' value="Send" required /><br />

    </form>
    <h4>Email:</h4>
    <a href="mailto: aleshya.ab@gmail.com" >aleshya.ab@gmail.com </a>
    <h4>More contact info:</h4>
    <Icon />
    </div>
  )

}

export default Contact