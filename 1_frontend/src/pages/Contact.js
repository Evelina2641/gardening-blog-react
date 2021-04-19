import React from 'react';
import Button from '../components/Button';
import './Contact.css';

function Contact() {
  return (
    <main className='contact'>
      <div className='container'>
        <h1>Contact Us</h1>
        <form>
          <div className='form-control'>
            <label>Name</label>
            <input type='text' />
          </div>
          <div className='form-control'>
            <label>Email</label>
            <input type='email' />
          </div>
          <div className='form-control'>
            <label>Message</label>
            <textarea name='message' id='message' cols='30' rows='5'></textarea>
          </div>
        </form>
        <div className="submit">
        <Button type='submit' text="Submit"/>
        </div>
      </div>
    </main>
  );
}

export default Contact;
