import React from 'react'

import LogoFooter from '../../../assets/logo-kloia.webp'
import Facebook from '../../../assets/facebook.png'
import Instagram from '../../../assets/instagram.png'
import Youtube from '../../../assets/youtube.png'
import Twitter from '../../../assets/twitter.png'

const Footer = () => (
  <div className="footer container">
    <img src={LogoFooter} alt="Footer Logo" />
    <div>Coffee Corp © 2021</div>
    <div>
      <img src={Facebook} alt="Facebook" />
      <img src={Instagram} alt="Instagram" />
      <img src={Youtube} alt="Youtube" />
      <img src={Twitter} alt="Twitter" />
    </div>
  </div>
)

export default Footer
