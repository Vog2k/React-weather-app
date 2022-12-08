import React from 'react';
import  "./components/ContactForm.css";
import ImageTwo from './components/Para2';



const Contact = () => {
  return (

    <div>
    <ImageTwo/>


      <div id="container">
  <h1 className='Message'>Send us a message!</h1>
  <div class="underline">
  </div>
  <div class="icon_wrapper">

  </div>
  <form action="#" method="post" id="contact_form">
    <div class="name">
      <label for="name"></label>
      <input className='newInput' type="text" placeholder="My name is" name="name" id="name_input" required></input>
    </div>
    <div class="email">
      <label for="email"></label>
      <input className='newInput' type="email" placeholder="My e-mail is" name="email" id="email_input" required></input>
    </div>
    <div class="telephone">
      <label for="name"></label>
      <input className='newInput' type="text" placeholder="My number is" name="telephone" id="telephone_input" required></input>
    </div>
    <div class="subject">
      <label for="subject"></label>
      <select placeholder="Subject line" name="subject" id="subject_input" required>
        <option disabled hidden selected>Subject line</option>
        <option>I'd like to start a project</option>
        <option>I'd like to ask a question</option>
        <option>I'd like to make a proposal</option>
      </select>
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
  </form>
</div>
            <footer className="footer1">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
    </div>
  );
};
  
export default Contact;