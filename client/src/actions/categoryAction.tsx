import axios from 'axios'
import { Dispatch } from 'redux'
import {
  GET_CATEGORIES,
  GET_CATEGORY,
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  SET_CATEGORY,
} from './types'

export const getCategories = () => async (dispatch: Dispatch) => {
  await dispatch({
    type: CATEGORY_LOADING,
    payload: true,
  })
  try {
    await dispatch({
      type: GET_CATEGORIES,
      payload: await axios.get('/categories'),
    })
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: {
        msg: err && err.response && err.response.error,
        status: err && err.response && err.response.status,
      },
    })
  }
  await dispatch({
    type: CATEGORY_LOADING,
    payload: false,
  })
}

export const setCategory = (category: string) => async (dispatch: Dispatch) => {
  try {
    await dispatch({
      type: SET_CATEGORY,
      payload: category,
    })
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: {
        msg: err && err.response && err.response.error,
        status: err && err.response && err.response.status,
      },
    })
  }
}

export const getCategoryById = (id: string) => async (dispatch: Dispatch) => {
  await dispatch({
    type: CATEGORY_LOADING,
    payload: true,
  })
  try {
    await dispatch({
      type: GET_CATEGORY,
      payload: await axios.get(`/category/${id}`),
    })
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: {
        msg: err && err.response && err.response.error,
        status: err && err.response && err.response.status,
      },
    })
  }
  await dispatch({
    type: CATEGORY_LOADING,
    payload: false,
  })
}
