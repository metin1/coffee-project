import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="center-box container">
    <h1>404</h1>
    <h2>The Page can&apos;t be found</h2>

    <Link to="/" className="button">
      Go to Homepage
    </Link>
  </div>
)

export default NotFound
