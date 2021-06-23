import {
  ActionCreator, Reducer,
} from 'redux'
import {
  SET_ALERT, REMOVE_ALERT,
} from '../actions/types'

const initialState: { id: number; msg: string; alertType: string }[] | undefined = []

export type AlertState = Readonly<typeof initialState>

const reducer: Reducer<AlertState> = (state = initialState, action: any) => {
  const {
    type, payload,
  } = action
  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}

export { reducer as alert }
