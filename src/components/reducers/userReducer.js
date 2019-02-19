import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../actions/userActions.js'

const initialState = {
  name: '',
  loading: false,
  error: false
}

export const userReducer = (state = initialState, action) => {
  if(action.type === FETCH_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === FETCH_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
    })
  } else if(action.type === FETCH_USER_FAILURE) {
    return Object.assign({}, state, {
      loading: true
    })
  }
}