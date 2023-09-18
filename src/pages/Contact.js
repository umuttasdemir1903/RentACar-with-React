import React from 'react'
import BannerImage from '../assets/img-1.avif'
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'  style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='rightSide'>
        <h1>Contact us</h1>
        <form id='contact-form'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' placeholder='Enter full name...'></input>

            <label htmlFor='name'>Sur Name</label>
            <input type='text' placeholder='Enter surname...'></input>

            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email...'></input>

            <label htmlFor='message'>Message</label>
            <textarea name='message' placeholder='Your message ?'></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default Contact
