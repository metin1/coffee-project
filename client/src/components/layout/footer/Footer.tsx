import React from 'react'

import LogoFooter from '../../../assets/logo-kloia.webp'
import Facebook from '../../../assets/facebook.png'
import Instagram from '../../../assets/instagram.png'
import Youtube from '../../../assets/youtube.png'
import Twitter from '../../../assets/twitter.png'

const Footer = () => (
  <div className='footer container'>
    <img src={LogoFooter} alt='Footer Logo' data-testid='footer-logo' />
    <div>Coffee Corp © 2021</div>
    <div>
      <img src={Facebook} alt='Facebook' data-testid='footer-facebook' />
      <img src={Instagram} alt='Instagram' data-testid='footer-instagram' />
      <img src={Youtube} alt='Youtube' data-testid='footer-youtube' />
      <img src={Twitter} alt='Twitter' data-testid='footer-twitter' />
    </div>
  </div>
)

export default Footer
