import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className='center-box container not-found'>
    <h1>404</h1>
    <p>The Page can&apos;t be found</p>
    <Link to='/' className='button'>
      Go to Homepage
    </Link>
  </div>
)

export default NotFound
