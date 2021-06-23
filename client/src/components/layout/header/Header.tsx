import React from 'react'
import { Link } from 'react-router-dom'

import LogoHeader from '../../../assets/logo.png'

const Header = () => (
  <div className='header container'>
    <Link to='/'><img src={LogoHeader} alt='Header Logo' data-testid='header-logo' /></Link>
    <div className='navbar'>
      <ul>
        <li data-testid='coffee-link'><Link to='/coffees'>Coffees</Link></li>
        <li data-testid='about-link'><Link to='/about'>About Us</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
