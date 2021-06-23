import React from 'react'
import {
  render, screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import App from './App'

// Landing Page Main Part Test
test('should Landing page text content as expected', () => {
  render(<App />)
  // Test landing page content
  expect(screen.getByText('TAKE A BREAK')).toBeInTheDocument()
  expect(screen.getByText('DRINK SOME COFFEE')).toBeInTheDocument()
  expect(screen.getByTestId('landing-paragraph')).toHaveTextContent('Forget everything and take a break. Select your coffee, hot or cold, whatever you want, choose according to your taste Relax yourself, get your energy again. Feel comfortable have a seat and share this time with your friends')

  // find an element with a role of link and text of 'Choose Your Drink'
  expect(screen.getByRole('link', { name: 'Choose Your Drink' })).toBeInTheDocument()
})


// Header Menu Test
test('should navbar menu has two item and contents are same as expected', () => {
  render(<App />)
  // Test navbar list exist and have two item
  expect(screen.getByRole('list')).toBeInTheDocument()
  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(2)

  // Test navbar items contents true
  expect(screen.getByTestId('coffee-link')).toHaveTextContent('Coffees')
  expect(screen.getByTestId('about-link')).toHaveTextContent('About Us')

  // Test header logo is true
  const logo = screen.getByTestId('header-logo')
  expect(logo).toHaveAttribute('src', 'logo.png')
  expect(logo).toHaveAttribute('alt', 'Header Logo')
})


test('should footer content and images as expected', () => {
  render(<App />)
  // Test footer logo is true
  const logo = screen.getByTestId('footer-logo')
  expect(logo).toHaveAttribute('src', 'logo-kloia.webp')
  expect(logo).toHaveAttribute('alt', 'Footer Logo')

  // Test social media icons is true
  const facebook = screen.getByTestId('footer-facebook')
  expect(facebook).toHaveAttribute('src', 'facebook.png')
  expect(facebook).toHaveAttribute('alt', 'Facebook')

  const instagram = screen.getByTestId('footer-instagram')
  expect(instagram).toHaveAttribute('src', 'instagram.png')
  expect(instagram).toHaveAttribute('alt', 'Instagram')

  const youtube = screen.getByTestId('footer-youtube')
  expect(youtube).toHaveAttribute('src', 'youtube.png')
  expect(youtube).toHaveAttribute('alt', 'Youtube')

  const twitter = screen.getByTestId('footer-twitter')
  expect(twitter).toHaveAttribute('src', 'twitter.png')
  expect(twitter).toHaveAttribute('alt', 'Twitter')

  // Test footer content
  expect(screen.getByText('Coffee Corp © 2021')).toBeInTheDocument()
})


test('should navigation buttons change page to about us page', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/about/i), leftClick)

  // check that the content changed to about us page
  expect(screen.getByTestId('coffee-motto')).toHaveTextContent('Hot, iced Coffees Made for you')
})

test('should navigation buttons change page to coffees page', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText('Coffees'), leftClick)

  // check that the content changed to coffee page
  expect(screen.getByTestId('coffee-head')).toHaveTextContent('Our Coffees')
})
