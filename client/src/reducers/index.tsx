import { combineReducers } from 'redux'
import categories, { CategoriesState } from './categoryReducer'
import coffees, { CoffeesState } from './coffeeReducer'

export interface IRootState {
  readonly categories: CategoriesState
  readonly coffees: CoffeesState
}

const rootReducer = combineReducers<IRootState>({
  categories,
  coffees,
})

export default rootReducer
