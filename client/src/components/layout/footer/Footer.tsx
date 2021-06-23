import React from 'react'

import LogoFooter from '../../../assets/logo-kloia.webp'
import Facebook from '../../../assets/facebook.png'
import Instagram from '../../../assets/instagram.png'
import Youtube from '../../../assets/youtube.png'
import Twitter from '../../../assets/twitter.png'

const Footer = () => (
  <div className='footer container'>
    <a href='https://www.kloia.com/'>
      <img src={LogoFooter} alt='Footer Logo' data-testid='footer-logo' />
    </a>
    <div>Coffee Corp © 2021</div>
    <div>
      <a href='https://www.facebook.com/kloiacom'>
        <img src={Facebook} alt='Facebook' data-testid='footer-facebook' />
      </a>
      <a href='https://www.instagram.com/kloia_com/'>
        <img src={Instagram} alt='Instagram' data-testid='footer-instagram' />
      </a>
      <a href='https://www.youtube.com/c/kloia'>
        <img src={Youtube} alt='Youtube' data-testid='footer-youtube' />
      </a>
      <a href='https://twitter.com/kloia_com'>
        <img src={Twitter} alt='Twitter' data-testid='footer-twitter' />
      </a>
    </div>
  </div>
)

export default Footer
