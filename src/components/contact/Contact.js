import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
    <div id='contact'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name='user_name' required/>
      <label>Email</label>
      <input type='email'  placeholder="name@example.com" name='user_email' required />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value="Send" required />

    </form>
    </div>
  )

}

export default Contact