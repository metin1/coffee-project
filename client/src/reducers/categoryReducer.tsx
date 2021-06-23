import {
  GET_CATEGORIES,
  GET_CATEGORY,
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  SET_CATEGORY,
} from '../actions/types'

type CategoryState = {
  categories: string[]
  category: string
  selectedCategory: string
  loading: boolean
  errors: unknown
}

const initialState: CategoryState = {
  categories: [],
  category: '',
  selectedCategory: 'all',
  loading: false,
  errors: {},
}

export type CategoriesState = Readonly<typeof initialState>

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data,
        loading: false,
      }
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload.data,
        loading: false,
      }
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
        loading: false,
      }
    case CATEGORY_ERROR:
      return {
        ...state,
        errors: action.payload,
      }
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
