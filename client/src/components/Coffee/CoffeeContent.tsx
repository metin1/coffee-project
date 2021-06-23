import React, {
  useEffect, useState,
} from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getCoffees } from '../../actions/coffeeAction'
import {
  coffeesSelector, categoriesSelector,
} from '../../reducers/selectors'
import { ICoffee } from '../../reducers/coffeeReducer'

export interface CoffeeContentProps {
  activeCategory?: string
  search?: string
}

const CoffeeContent = ({ search }: CoffeeContentProps) => {
  const dispatch = useDispatch()
  const coffeeState = useSelector(coffeesSelector)
  const categoriesState = useSelector(categoriesSelector)

  const getCoffeesData = async () => dispatch(getCoffees())

  useEffect(() => {
    getCoffeesData()
  }, [])

  const [filteredCoffee, setFilteredCoffee] = useState(coffeeState.coffees)

  useEffect(() => {
    let transfer: ICoffee[] = coffeeState.coffees
    if (categoriesState.selectedCategory !== 'all') {
      transfer = coffeeState.coffees.filter(
        (coffee: ICoffee) => coffee.category === categoriesState.selectedCategory,
      )
    }
    if (search) {
      // eslint-disable-next-line max-len
      transfer = transfer.filter((coffee: ICoffee) => coffee.title.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCoffee(transfer)
  }, [search, categoriesState.selectedCategory, coffeeState])

  if (filteredCoffee?.length) {
    return (
      <div className='coffee-content' id='coffee-content'>
        {filteredCoffee.map((coffee: ICoffee) => (
          <div key={coffee.id}>
            <div className='coffee-title'>{coffee.title}</div>
            <div className='coffee-description'>{coffee.description}</div>
            {coffee.ingredients && (
              <div className='coffee-ingredients'>
                Ingredients:
                {' '}
                {coffee.ingredients?.map((ingredient) => (
                  <span>
                    {ingredient}
                    {' '}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className='coffee-content' id='coffee-content'>
      There is no record.
    </div>
  )
}

export default CoffeeContent
