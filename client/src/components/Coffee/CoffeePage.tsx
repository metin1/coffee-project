import React, { useState } from 'react'
import CoffeeContent from './CoffeeContent'
import CoffeeCategoriesList from './CoffeeCategoriesList'

const CoffeePage = () => {
  const [search, setSearch] = useState('')

  return (
    <div className='container'>
      <h1 className='coffee-header'>Our Coffees</h1>
      <div className='coffee-main' id='coffee-main'>
        <div className='coffee-menu' id='coffee-menu'>
          <input
            type='text'
            name='search'
            id='coffee-search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <CoffeeCategoriesList />
        </div>
        <CoffeeContent search={search} />
      </div>
    </div>
  )
}
export default CoffeePage
