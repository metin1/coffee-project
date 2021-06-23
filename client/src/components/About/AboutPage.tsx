import React from 'react'

const AboutPage = () => (
  <div>
    <div className='about-top center-box'>
      <div className='container'>
        <h1>Coffee Corp</h1>
        <p data-testid='coffee-motto'>“Hot, iced Coffees Made for you”</p>
      </div>
    </div>
    <div className='container about-main'>
      <div>
        <h1>About Us</h1>
        <p>
          Since 2015, Coffee corp provides coffees to customers. We have customers in 5 countries
          from a wide variety.
        </p>
      </div>
      <div>
        <h1>Contact Us</h1>
        <p>London</p>
        <p>519 Derek Drive</p>
        <p>330-399-9117</p>
        <p>Warren</p>
        <p>346 Jett Lane</p>
        <p>330-979-1413</p>
      </div>
    </div>
  </div>
)

export default AboutPage
