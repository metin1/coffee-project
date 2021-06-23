import axios from 'axios'
import { Dispatch } from 'redux'
import {
  GET_COFFEES, GET_COFFEE, COFFEE_ERROR,
} from './types'

export const getCoffees = () => async (dispatch: Dispatch) => {
  try {
    await dispatch({
      type: GET_COFFEES,
      payload: await axios.get('/coffee/all'),
    })
  } catch (err) {
    dispatch({
      type: COFFEE_ERROR,
      payload: {
        msg: err && err.response && err.response.error,
        status: err && err.response && err.response.status,
      },
    })
  }
}

export const getCoffeeById = (id: string) => async (dispatch: Dispatch) => {
  try {
    await dispatch({
      type: GET_COFFEE,
      payload: await axios.get(`/coffee/${id}`),
    })
  } catch (err) {
    dispatch({
      type: COFFEE_ERROR,
      payload: {
        msg: err && err.response && err.response.error,
        status: err && err.response && err.response.status,
      },
    })
  }
}
