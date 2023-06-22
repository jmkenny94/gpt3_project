import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer__section section__padding'>
      
      <div className='footer__section-heading section__padding'>
        <h1 className='gradient__text'>Do you want to step into the <br /> future before others? </h1>
      </div>

      <div className='footer__btn'>
          <button type='button'>Request Early Access</button>
      </div>

      <div className='footer__section-content'>

        <div className='footer__section-content_gpt3'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='footer__section-content_links'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='footer__section-content_links'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='footer__section-content_links'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>

      </div>

      <div className='footer__copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>

      </div>
    </div>
  )
}

export default Footer