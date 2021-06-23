import React from 'react'
import {
  render, screen,
} from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import AboutPage from '../AboutPage'

// Landing Page Main Part Test
test('should NotFound page shown and text content as expected', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <AboutPage />
    </Router>,
  )
  // Test landing page content
  expect(screen.getByText('About Us')).toBeInTheDocument()
  expect(screen.getByText('Contact Us')).toBeInTheDocument()

  expect(screen.getByTestId('about-paragraph')).toHaveTextContent('Since 2015, Coffee corp provides coffees to customers. We have customers in 5 countries from a wide variety.')
})
