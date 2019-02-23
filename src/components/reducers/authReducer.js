import {
  GET_USER_TOKEN,
  SET_USER_TOKEN
} from '../actions/authActions.js'

const initialState = {
  token: null,
  loading: false,
  error: false
}

const authReducer = (state = initialState, action) => {
  if(action.type === GET_USER_TOKEN) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === SET_USER_TOKEN) {
    return Object.assign({}, state, {
      token: action.token,
      loading: false,
      error: null,
    })
  } else {
    return initialState
  }
}

export default authReducer