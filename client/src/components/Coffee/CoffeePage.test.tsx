import React from 'react'
import { render, fireEvent, screen } from '../../test-utils'

import CoffeePage from './CoffeePage'
import coffees from './data/coffees.json'
// Coffee Page Part Test
test('should Landing page text content as expected', () => {
  render(<CoffeePage />, { initialState: { coffees: { coffees }} })

  expect(screen.getByText(coffees[0].title)).toBeInTheDocument()
  expect(screen.getByText(coffees[0].description)).toBeInTheDocument()

  const leftClick = { button: 0 }
  fireEvent.click(screen.getByText('Iced'), leftClick)

  expect(screen.getByText(coffees[0].title)).not.toBeInTheDocument()
  expect(screen.getByText(coffees[0].description)).not.toBeInTheDocument()

  expect(screen.getByText(coffees[26].title)).toBeInTheDocument()
  expect(screen.getByText(coffees[26].description)).toBeInTheDocument()

})
