import { combineReducers } from 'redux'
import {
  alert, AlertState,
} from './alertReducer'
import categories, { CategoriesState } from './categoryReducer'
import coffees, { CoffeesState } from './coffeeReducer'

export interface IRootState {
  readonly alert: AlertState
  readonly categories: CategoriesState
  readonly coffees: CoffeesState
}

const rootReducer = combineReducers<IRootState>({
  alert,
  categories,
  coffees,
})

export default rootReducer
