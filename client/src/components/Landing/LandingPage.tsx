import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <div className='container landing'>
    <h1>TAKE A BREAK</h1>
    <h1 className='light'>DRINK SOME COFFEE</h1>

    <p data-testid='landing-paragraph'>
      Forget everything and take a break. Select your coffee, hot or cold, whatever
      you want, choose according to your taste  Relax yourself, get your energy
      again. Feel comfortable have a seat and share this time with your friends.
    </p>

    <Link to='/coffees' className='button'>Choose Your Drink</Link>

  </div>
)

export default LandingPage
