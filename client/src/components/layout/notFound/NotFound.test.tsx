import React from 'react'
import {
  render, screen,
} from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import NotFound from './NotFound'

// Landing Page Main Part Test
test('should NotFound page shown and text content as expected', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <NotFound />
    </Router>,
  )
  // Test landing page content
  expect(screen.getByText('404')).toBeInTheDocument()
  expect(screen.getByText('The Page can\'t be found')).toBeInTheDocument()

  // find an element with a role of link and with content 'Go to Homepage'
  expect(screen.getByRole('link', { name: 'Go to Homepage' })).toBeInTheDocument()
})
