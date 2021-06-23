import {
  GET_COFFEES, GET_COFFEE, COFFEE_ERROR, COFFEE_LOADING,
} from '../actions/types'

export interface ICoffee {
  id: number
  description?: string
  title: string
  category: string
  ingredients?: ['iced' | 'hot']
  createdTime?: string
  updatedTime?: string
}

type CoffeeState = {
  coffees: ICoffee[]
  coffee: ICoffee
  loading: boolean
  errors: unknown
}

const initialState: CoffeeState = {
  coffees: [],
  coffee: {
    id: 0,
    title: '',
    category: '',
  },
  loading: false,
  errors: {},
}

export type CoffeesState = Readonly<typeof initialState>

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COFFEES:
      return {
        ...state,
        coffees: action.payload?.data,
        loading: false,
      }
    case GET_COFFEE:
      return {
        ...state,
        coffee: action.payload?.data,
        loading: false,
      }
    case COFFEE_ERROR:
      return {
        ...state,
        errors: action.payload?.data,
      }
    case COFFEE_LOADING:
      return {
        ...state,
        loading: action.payload?.data,
      }
    default:
      return state
  }
}
