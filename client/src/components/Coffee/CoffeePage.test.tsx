import React from 'react'
import {
  render, fireEvent, screen,
} from '../../test-utils'

import CoffeePage from './CoffeePage'
import coffees from './data/coffees.json'
// Coffee Page Part Test
test('should Landing page text content as expected', () => {
  render(<CoffeePage />, { initialState: {
    coffees: { coffees },
    categories: {
      categories: ['hot', 'iced'], selectedCategory: 'all',
    },
  } })

  // All coffee selected first and last record at the screen
  expect(screen.getByText(coffees[0].title)).toBeInTheDocument()
  expect(screen.getByText(coffees[0].description)).toBeInTheDocument()
  expect(screen.getByText(coffees[25].title)).toBeInTheDocument()
  expect(screen.getByText(coffees[25].description)).toBeInTheDocument()

  // Check categories and buttons
  const leftClick = { button: 0 }
  const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBe(3)

  expect(buttons[0]).toHaveTextContent('All Coffee')
  expect(buttons[1]).toHaveTextContent(/hot/i)
  expect(buttons[2]).toHaveTextContent(/iced/i)

  // Click hot button
  fireEvent.click(buttons[1], leftClick)

  // list Hot Coffees
  expect(screen.getByText(coffees[19].title)).toBeInTheDocument()
  expect(screen.getByText(coffees[19].description)).toBeInTheDocument()

  // No list Iced Coffees
  expect(screen.queryByText(coffees[25].title)).not.toBeInTheDocument()
  expect(screen.queryByText(coffees[25].description)).not.toBeInTheDocument()

  // Find and write Bl to search box
  const searchBox = screen.getByRole('textbox')
  fireEvent.change(searchBox, { target: { value: 'Bl' } })

  // list only first record black
  expect(screen.getByText(coffees[0].title)).toBeInTheDocument()
  expect(screen.getByText(coffees[0].description)).toBeInTheDocument()

  // No list other records
  expect(screen.queryByText(coffees[1].title)).not.toBeInTheDocument()
  expect(screen.queryByText(coffees[1].description)).not.toBeInTheDocument()

  // Click Iced button
  fireEvent.click(buttons[2], leftClick)

  // Filter with seacrh "Bl" and Iced no record found
  expect(screen.queryByText(coffees[0].title)).not.toBeInTheDocument()
  expect(screen.queryByText(coffees[0].description)).not.toBeInTheDocument()

  // See There is no record.
  expect(screen.getByText('There is no record.')).toBeInTheDocument()
})
