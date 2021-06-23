import { createSelector } from 'reselect'

import { IRootState } from './index'

const stateSelector = (state: IRootState) => state

export const coffeesSelector = createSelector(stateSelector, (state) => state.coffees)
export const categoriesSelector = createSelector(stateSelector, (state) => state.categories)
