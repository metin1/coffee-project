import React, { useEffect } from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import {
  getCategories, setCategory,
} from '../../actions/categoryAction'
import { categoriesSelector } from '../../reducers/selectors'

const CategoryCategoriesList = () => {
  const dispatch = useDispatch()
  const categoriesState = useSelector(categoriesSelector)

  const getCategoriesData = async () => dispatch(getCategories())

  useEffect(() => {
    getCategoriesData()
  }, [])

  const handleClick = (selection: string) => {
    dispatch(setCategory(selection))
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 65) {
      dispatch(setCategory('all'))
    }
    if (e.keyCode === 72) {
      dispatch(setCategory('hot'))
    }
    if (e.keyCode === 73) {
      dispatch(setCategory('iced'))
    }
  }

  if (categoriesState.categories?.length) {
    return (
      <div className='category-content' id='category-content'>
        <div
          className={
            categoriesState.selectedCategory === 'all'
              ? 'category-content-item category-content-item-selected'
              : 'category-content-item'
          }
          onKeyDown={handleKeyDown}
          role='button'
          tabIndex={0}
          onClick={(e) => handleClick('all')}
        >
          All Coffees
        </div>
        {categoriesState.categories.map((category: string, i: number) => (
          <div
            key={category}
            role='button'
            tabIndex={i}
            className={
              categoriesState.selectedCategory === category
                ? 'category-content-item category-content-item-selected'
                : 'category-content-item'
            }
            onClick={() => handleClick(category)}
            onKeyDown={(e) => handleKeyDown(e)}
          >
            {category}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className='category-content' id='category-content'>
      There is no record.
    </div>
  )
}

export default CategoryCategoriesList
